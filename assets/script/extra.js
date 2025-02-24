const dateToday = document.querySelector('.date')

const numberDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})

dateToday.innerHTML = `Last update: ${numberDate}`;

const closePub = document.querySelector('#close');
const publiBig = document.querySelector('.publi-big')

closePub.onclick = () => {
    publiBig.classList.add('hidden')
}