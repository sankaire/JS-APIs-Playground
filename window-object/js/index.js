//grabing the div
const div = document.querySelector('div')
let winWidth = window.innerWidth
let winHeight = window.innerHeight

//dynamically alter the width and height of the div to equal that of the viewport
div.style.width = winWidth + 'px';
div.style.height = winHeight + 'px';

//window resize event handler
window.onresize = () =>{
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    div.style.width = winWidth + 'px';
    div.style.height = winHeight + 'px';
}