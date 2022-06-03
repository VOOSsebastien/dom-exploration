const ol= document.querySelector('ol');
const liall = document.querySelectorAll('li');
var i=liall.length-1;
var lastchildy=ol.children[i];
console.log(lastchildy);
ol.insertBefore(lastchildy, ol.firstChild);

const princi= document.querySelectorAll('main');

const hh= document.querySelectorAll('h2');

const sectio=document.querySelectorAll('section');

const h23=sectio[2].children[0];

const h23r=h23.children[0];

const h22=sectio[1].firstElementChild;

sectio[2].insertBefore(h22,h23);
sectio[1].insertBefore(h23r,sectio[1].firstElementChild);

sectio[2].remove();


