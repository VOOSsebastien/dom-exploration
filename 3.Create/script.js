/*
function remove(value,arr) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
*/
const section = document.createElement("section");
document.querySelector('article').appendChild(section);
var tab=['LATIFA','HENRI','ARTHUR','SEBASTIEN'];
for(i=0;i<tab.length;i++){
    var iswitch=Math.floor(Math.random()*4);

    var random=Math.floor(Math.random()*255);
    var random1=Math.floor(Math.random()*255);
    var random2=Math.floor(Math.random()*255);
    var random3="rgb("+random+","+random1+","+random2+")";
    const para = document.createElement("p");
    para.innerText =tab[iswitch];
    //remove(iswitch,tab);
    console.log(tab);
    para.style.backgroundColor=random3;
    if((random<100 && random1<100)||(random<100 && random2<100)||(random1<100 && random2<100)){
        para.style.color="white";
    }
    document.querySelector('section').appendChild(para);
}