console.log(document.title);
let newTitle;
newTitle="Modifying the DOM";
document.title=newTitle ;
console.log(document.title);



function rand255(){
    random=Math.floor(Math.random() * 255 ) + 1;
    return random;
}
let random=0,random1=0,random2=0;
rand255();
random1=random;
rand255();
random2=random;
rand255();
document.body.style.backgroundColor="rgb("+ random +","+ random1 +","+ random2 +")";


for ( let element of document.body.children) {
    console.log(element);
}
