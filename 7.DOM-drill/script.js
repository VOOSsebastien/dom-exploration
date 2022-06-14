/////////////
//1.Use childNodes to list all the children from the <ul>
/////////////
let ul=document.querySelector("ul");
console.log(ul);
var children=ul.childNodes;
console.log(children);
/////////////
//2.Write a for loop to iterate over every child. In this loop:
//2.1.Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
//2.2.Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
//2.3.Since Fast and Furious is the most important franchise ever, add a class .important to the element
//2.4.Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element

/////////////
let s=document.querySelectorAll("li");
let body=document.querySelectorAll("body");

for(i=0;i<children.length;i++){
        if(children[i].innerText=="Fast and Furious"){
            document.querySelector("li").before(children[i]);
            document.querySelector("li").setAttribute("class","important");
            }
        }
        document.querySelectorAll("li").addEventListener('click', clickOn)
var clickOn = () => { 
    alert("dcfgvh");
}  
