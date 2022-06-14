//////////////////
///1.Add a keyup listener on the first input field, so that once you type  letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
////////////////////
document.getElementById('firstname').addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById('firstname');
  var y = document.getElementById('display-firstname');
  y.innerText=x.value;
}
/////////////
//2.Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
/////////////
document.getElementById('age').addEventListener("keyup", myFunction2);
function myFunction2() {
  var x = document.getElementById('age');
  if(x.value>18){
    console.log(x.value);
    var y = document.getElementById('a-hard-truth');
    y.style.visibility='visible';
  }else {
    if(x.value<17){
    console.log(x.value);
    var y = document.getElementById('a-hard-truth');
    y.style.visibility='hidden';
  }
  }
}
/////////////
//3.Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
/////////////
let pwd=document.getElementById("pwd")
let pwdConfi=document.getElementById("pwd-confirm")

pwd.addEventListener("keyup", ()=>{
    if((pwd.value.length)<6){
        pwd.style.backgroundColor="red";
    }else {
        pwd.style.backgroundColor="green";
    }

});
pwdConfi.addEventListener("keyup", ()=>{  
    if(pwd.value!==pwdConfi.value){
        pwdConfi.style.backgroundColor="red";
        pwd.style.borderBlockColor="red";
    }else{
        pwdConfi.style.backgroundColor="green";
        pwd.style.backgroundColor="green";
    }
});
pwd.addEventListener("keyup", ()=>{  
    if(pwd.value!==pwdConfi.value){
        pwdConfi.style.backgroundColor="red";
        pwd.style.borderBlockColor="red";
    }else{
        pwdConfi.style.backgroundColor="green";
        pwd.style.backgroundColor="green";
    }
});
/////////////
//4.Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
/////////////
let z =document.getElementById("toggle-darkmode");
let body=document.querySelector("body");
z.addEventListener("change",()=>{
    if(z.value=="dark"){
        body.style.backgroundColor="black";
        body.style.color="white";
    }else{
        body.style.backgroundColor="white";
        body.style.color="black";
    }
})



