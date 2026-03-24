// window object --> represent open window in browser
// its browser object (not js) & its automatically created by browser
// its a global object with lots of properties and methods

// DOM --> document object model(dom)
// when webpage is loaded, the browser creates a DOM of the page

//console.dir() --> used to print properties nd methods of special objects like documents

// window-->document-->html-->head & body

//DOM is used to make dynamical changes or manipulation*******
console.dir(document.body);
console.log(document.body);

//DOM manipulations
//selecting or accessing with ID
// document.getElementById("myId");
let heading = document.getElementById("h1");
console.dir(heading);

//selecting or accessing with Class
//document.getElementByClassName("myClass");  --> returns html collection
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

//selecting or accessing with Tags
//document.getElementByTagName("myTag");
let para = document.getElementsByTagName("p");
console.dir(para);
console.log(para);

//QUERY SELECTOR --->***imp***
//document.querySelector("myId"/"myClass"/"myTag"); //returns first element
//document.querySelectorAll("myId"/"myClass"/"myTag"); //returns a NODELIST

let firstEl = document.querySelector("p");
console.dir(firstEl);

let allEl = document.querySelectorAll("p");
console.dir(allEl);

//nodes are of 3 types
//text node/comment node/element nodes
//firstChild/lastChild/children/ --> for navigation

let a = document.body.querySelector("div").children 
console.log(a);
// -> gives html collection [h1,div]


//PROPERTIES OF DOM
// a) tagName : returns tag for element Nodes
//--> firstEl.tagName --> gives 'p'
// b) innerText : returns the text content of all element and all its childrens
// c) innerHtml : returns the plain text or HTML content in the element
//this can also change content or HTML itself dynamicaly
let div = document.querySelector("div");
console.dir(div);
// d) textContent : returns textual content even for hidden elements
let h1=document.querySelector("h1");
console.dir(h1);


//practice question
//create a H2 heading element with text - "hello javascript". append "form apna college
// students" to this text using js
// to solve this we need to access our element first and thn use the property accordingly
let h2 = document.querySelector("h2");
console.dir(h2.innerText); 
h2.innerText = h2.innerText + " from apna college students";
console.dir(h2);

//create 3 divs wiht common class name - 'box'. access them & add some unique text to each of them
let accDiv = document.querySelectorAll(".box");

indx=0
for(let i of accDiv)
{
    i.innerText = `unique ${indx+1}`;
    indx++;
}

//begineers method
// accDiv[0].innerText = "unique 1";
// accDiv[1].innerText = "unique 2";
// accDiv[2].innerText = "unique 3";