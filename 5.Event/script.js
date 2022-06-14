const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

var clickOnSquare = (e) => {
  /////////retour couleur///////////
  console.log(e.target.classList[1]);
  //////////////////////////////

  var art=e.target.classList[1];
  const div = document.createElement("div");
    document.querySelector('.displayedsquare-wrapper').appendChild(div);
    div.classList.add('displayedsquare');
    /*
    const div2 = document.createElement("div22");
    document.querySelector('.displayedsquare-wrapper').appendChild(div2);
    */
   switch(e.target.classList[1]){
     case 'green':
      div.style.backgroundColor="lime";
      div.setAttribute("class","displayedsquare green")

      ;
     break;
     case 'violet':
      div.style.backgroundColor="magenta";
      div.setAttribute("class","displayedsquare violet")

      ;
     break;
     case 'orange':
      div.style.backgroundColor="orange";
      div.setAttribute("class","displayedsquare orange")

      ;
     break;
     default:
       console.log("NTM");
   }

    const li = document.createElement("li");
    document.querySelector('ul').appendChild(li);
    li.innerText=(art+" "+getElapsedTime());
    let displayedsquares=document.querySelectorAll('.displayedsquare');

    for(displayedsquare of displayedsquares){

   if(div.className == "displayedsquare green"){
    displayedsquare.addEventListener('click',()=>{alert("green")})
  }

  if(div.className == "displayedsquare violet"){
    displayedsquare.addEventListener('click',()=>{alert("violet")})
  }

  if(div.className == "displayedsquare orange"){
    displayedsquare.addEventListener('click',()=>{alert("orange")})
  }

}
}


const body =document.querySelector("body");
body.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    body.style.backgroundColor=rand255();
    const li = document.createElement("li");
    document.querySelector('ul').appendChild(li);
    li.innerText=("changement backgroundcolor ! And you press the spacebar "+getElapsedTime());
  }
})



body.addEventListener('keydown', event => {
  if (event.code === 'KeyL') {
  let list=document.querySelectorAll("li");
  console.log(list);
  console.log("okokbojlncd");
  for(i=0;i<list.length;i++){
  list[i].remove();
  console.log(list);
  }
  }
})

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}



function rand255(){
  var random=Math.floor(Math.random() * 255 ) ;
  var random1=Math.floor(Math.random() * 255 ) ;
  var random2=Math.floor(Math.random() * 255 ) ;
  return random3="rgb("+ random +","+ random1 +","+ random2 +")";
}