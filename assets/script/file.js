
import get from 'lodash/get';
import axios from 'axios';


async function initializeNewStories() {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
  return response.data;
}

async function shownews(Idnew) {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${Idnew}.json`);
  return response.data;
}


let listIds;

let showedIds=[];
let showed = 0;
let container = document.querySelector('.container');




function tennews() {
    for (let i=showed; i < (showed + 10); i++){
        let singleIdNews = listIds[i];
           console.log(singleIdNews)

            shownews(singleIdNews).then(data => {
            showedIds.push(data); 
            
            let newsBox = document.createElement('a');
            newsBox.classList.add('news');

                let titleNews = document.createElement('h3');
                

                titleNews.textContent = get(data, 'title', 'No title available. Sorry for the inconvenient.');
                

                let authorPar = document.createElement("p");
          
                authorPar.textContent = `Author: ${get(data, 'by', 'Unknown')}`;


                let unix_time = get(data, 'time', '-')
                let timeNews = new Date(unix_time * 1000);
                function formatDate(date) {
                    const options = { day: '2-digit', month: 'short', year: 'numeric' };
                    return date.toLocaleDateString('en-GB', options).replace(/ /g, '-');
                  }
                let formattedDate = formatDate(timeNews);
                let timePar = document.createElement("p");
                timePar.textContent = `Date: ${formattedDate}`;

                let linkPar = document.createElement("div");
                
                newsBox.setAttribute('href', data.url);
                newsBox.setAttribute('target','_blank');
                linkPar.setAttribute('class','right');

                let textLinkPar = document.createElement('p');
                textLinkPar.textContent = `Click to read more...`;
                textLinkPar.setAttribute('class','line-effect');

                newsBox.appendChild(titleNews);
                newsBox.appendChild(authorPar);
                newsBox.appendChild(timePar);
                newsBox.appendChild(linkPar);
                linkPar.appendChild(textLinkPar);

                container.appendChild(newsBox);
        })    
    }
}

 initializeNewStories().then(data => {
     listIds = data;
     console.log(listIds)
     tennews();
 }).catch(error => {
     console.error("ERROR", error);
 });
    


const loadMore = document.querySelector('#loadmore');

loadMore.addEventListener('click', function() {
    showed += 10;
    tennews();
})



