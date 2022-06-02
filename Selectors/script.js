console.log(document.title);
let el = document.querySelectorAll(".important");
let el1 = document.querySelector(".important");
console.log(el);
el.forEach(el1 => {
    el1.setAttribute("title","THIS IS AN IMPORTANT ITEM");
});

////////////////
///////:ex2////////////
///////////////
let eltemp = document.querySelectorAll("img");
let eltemp1 = document.querySelectorAll("img");
eltemp.forEach(eltemp1 => {
    eltemp1.style.display="none";
});
let el2 = document.querySelectorAll("img.important");
let el3 = document.querySelector("img");
el2.forEach(el3 => {
    el3.style.display="inline-block";

});

///////////////////:
/////ex3/////////:
/////////////////:

let el4 = document.querySelectorAll("p");
let el5 = document.querySelector("p");

el4.forEach(el5 => {
    var titlep=el5.getAttribute('class');
    console.log(el5.innerText);
    console.log(titlep);

});

        el4.forEach(el5=>{
            var titlep=el5.getAttribute('class');

            el5.style.color=rand255();
            if(!titlep==""){
                el5.style.color="black";
            }
        }
        )



////////////////////////////:
function rand255(){
     var random=Math.floor(Math.random() * 255 ) ;
    var random1=Math.floor(Math.random() * 255 ) ;

    var random2=Math.floor(Math.random() * 255 ) ;

    return random3="rgb("+ random +","+ random1 +","+ random2 +")";
}

