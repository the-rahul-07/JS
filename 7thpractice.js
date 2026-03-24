//create a new button element. give it a text "click me ", background colour 
//of red & text colour of white
//insert the button as the first element inside the body tag

let btn = document.createElement("button");
btn.innerText = "CLICK ME!";
btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body").prepend(btn);

//create a <p> tag in html give it a class & some styling 
//now create a new class in css and try to append this class to the <p> element
//did you notice, how you overwrite the class name when you add a new one?
//solve this problem using classList

let para = document.querySelector("p");
// para.setAttribute("class","newpara");
//setAttribute --> whole styling will be overwrite

//classList -  add & remove
para.classList.add("newpara");