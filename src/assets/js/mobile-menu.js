const menu    = document.querySelector('.menu');
const links   = document.querySelector('.links');
const topBar  = document.querySelector('.topBar');
const midBar  = document.querySelector('.midBar');
const lowBar  = document.querySelector('.lowBar');
const logo    = document.querySelector('#logo');

menu.addEventListener('click', () => { 
    links.classList.toggle('hidden');
    links.classList.toggle('bg-white'); // for test
    links.classList.toggle('outline'); // for test
    topBar.classList.toggle('transform');
    topBar.classList.toggle('translate-y-2'); 
    topBar.classList.toggle('-rotate-45');
    midBar.classList.toggle('invisible');
    lowBar.classList.toggle('transform');
    lowBar.classList.toggle('-translate-y-2');        
    lowBar.classList.toggle('rotate-45');
});