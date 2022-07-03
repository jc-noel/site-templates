const menu    = document.querySelector('.menu');
const links   = document.querySelector('.links');
const topBar  = document.querySelector('.topBar');
const midBar  = document.querySelector('.midBar');
const lowBar  = document.querySelector('.lowBar');
const logo    = document.querySelector('#logo');

menu.addEventListener('click', () => { 
    links.classList.toggle('hidden');
    links.classList.toggle('bg-white');
    links.classList.toggle('outline');
    links.classList.toggle('outline-2');

    topBar.classList.toggle('transform');
    topBar.classList.toggle('translate-y-2'); 
    topBar.classList.toggle('-rotate-45');

    midBar.classList.toggle('invisible');

    lowBar.classList.toggle('transform');
    lowBar.classList.toggle('-translate-y-2');        
    lowBar.classList.toggle('rotate-45');
    lowBar.classList.toggle('w-3');
    lowBar.classList.toggle('w-7');
    lowBar.classList.toggle('ml-4');

});