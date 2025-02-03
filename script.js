import {createQuote} from './functions.js';

const start = document.getElementById('start');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const quote = document.getElementById('quote');

const showQuote = () => {
    subtitle.hidden = true;
    quote.innerHTML = createQuote();
    start.innerHTML = 'Restart'
    title.style.fontSize = '30px';
    title.style.textAlign = 'right';
    title.style.right = '25px';
    title.style.top = '15%'; 
    title.style.position = 'absolute';

}


start.onclick = showQuote;