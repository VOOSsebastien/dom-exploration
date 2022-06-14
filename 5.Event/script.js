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
    let displayedSquareSS =document.getElementsByClassName("displayedsquare")
    console.log(displayedSquareSS);
    var S = displayedSquareSS;
    for ( let displayedsquare of S) {
      displayedsquare.addEventListener('click', clickOnDisSquare)
    }
}
  //////////////////////////
  //pop-up///////////
  ///////////////////////////
var clickOnDisSquare = (S) => {
  console.log(S);
  if (S.target.classList.contains("green") === true) {
    alert("Green");
  } else if (S.target.classList.contains("violet") === true) {
    alert("Violet");
  } else if (S.target.classList.contains("orange") === true) {
    alert("Orange");
  }  
}

//////:
/*

    */
   ////

///////////////
////////////////SPACE///////////////
//////////////////////////////////
const body =document.querySelector("body");
body.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    body.style.backgroundColor=rand255();
    const li = document.createElement("li");
    document.querySelector('ul').appendChild(li);
    li.innerText=("changement backgroundcolor ! And you press the spacebar "+getElapsedTime());
  }
})

/////////////////
////////////LKEY//
/////////////////
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

/////////////////
////////////SKEY//
/////////////////
let displayedsquares=document.querySelectorAll('.displayedsquare');
body.addEventListener('keydown', event => {
  if (event.code === 'KeyS') {
    let displayedsquares=document.querySelectorAll('.displayedsquare');
  console.log(displayedsquares);
  for(i=0;i<displayedsquares.length;i++){
    displayedsquares[i].remove();
  }
  console.log(displayedsquares);
  }
})

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

//////////////////////////
///////rnadomcolor//
//////////////////////

function rand255(){
  var random=Math.floor(Math.random() * 255 ) ;
  var random1=Math.floor(Math.random() * 255 ) ;
  var random2=Math.floor(Math.random() * 255 ) ;
  return random3="rgb("+ random +","+ random1 +","+ random2 +")";
}