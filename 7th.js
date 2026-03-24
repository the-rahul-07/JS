// ATTRIBUTES IN DOM MANIPULATIONS
//getAttribute("attribute"); --> to get the attribute value
let accdiv=document.querySelector("#div1");
console.log(accdiv);

let name = accdiv.getAttribute("name");
let id = accdiv.getAttribute("id");
console.log(id);
console.log(name);

//setAttribute(attr,value to set); --> to set the attribute value
accdiv.setAttribute("id","divId");
console.log(accdiv.getAttribute("id"));

//style
//node.style
//div1---> changed to divId
/** @type {HTMLElement} */   // -->this is to tell that its html element
let getdiv = document.querySelector("#divId");
getdiv.setAttribute("style","background-color : red"); //-->inline style changed from js in html

getdiv.style.backgroundColor = "yellow";
getdiv.style.color = "black";
getdiv.style.fontSize = "20px";
getdiv.innerText = "hello";
// getdiv.style.visibility = "hidden";

//INSERT ELEMENT 
//STEP 1 -> create element  || STEP 2 -> add element
//to create elment --> let el = document.createElement("div | Elment name");

let newBtn = document.createElement("button");
newBtn.innerText = "CLICK ME!"
console.log(newBtn);

//adding element to screen after its created
//node.append(element); --> adds at the end of the node(inside)
//node.prepend(element); --> adds at the start of node(inside)
//node.before(element); --> adds before the node (outside)
//node.after(element); --> adds after the node (outside)


let div2 = document.querySelector("#div2");
div2.append(newBtn);
div2.prepend(newBtn);
div2.after(newBtn);
div2.before(newBtn);

let hding = document.createElement("h1");
hding.innerHTML = "<i><u>I AM RAHUL GUPTA!</u></i>";

document.querySelector("body").prepend(hding);

//to DELETE ELEMENT
//node.remove() --> removes the node
document.querySelector("#unknown").remove();

//appendChild() || removeChild()

