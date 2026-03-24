/**@type {HTML} */
//EVENT HANDLING IN JS
//node.even = () =>{
    //handle here
// }
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn 1 was clicked");
    let a=25;
    a++;
    console.log(a); //26
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("Your inside div");
};

//3 types of handling -> inline/js handling through nodes/event listeners
//priority of JS handle > inline handling

//EVENT OBJECT -> its a special object that has details about the event
//all event handlers hve access to the event object's properties and methods
//node.even = (e) =>{
    //handle here
// }

let btn2 = document.querySelector("#btn2");
btn2.onclick = (evt) => {
    console.log("btn2 was clicked(node method)");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

//EVENT LISTENERS
//node.addEventListener(event,callbackfun);
f1=(evt)=>{
    console.log("btn 2 was clicked(eventlistener)");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};
btn2.addEventListener("click",f1);

btn2.addEventListener("click", ()=>{
    console.log("clicked");
});


const handler1 = ()=>{
    console.log("Handler 1");
}
btn1.addEventListener("click",handler1);

const handler2 = ()=>{
    console.log("Handler 2");
}
btn1.addEventListener("click",handler2);

const handler3 = ()=>{
    console.log("Handler 3");
}
btn1.addEventListener("click",handler3);

const handler4 = ()=>{
    console.log("Handler 4");
}
btn1.addEventListener("click",handler4);

//node.removeEventListener(event,callback);
btn1.removeEventListener("click",handler3);

//practice ques


let modebtn = document.querySelector("#themebtn");
let currentMode = "light";

const mode = ()=>{
    if(currentMode === "light"){
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
        currentMode = "dark";
    }else{
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.add("dark");
        currentMode = "light";
    }
    console.log("current mode -",currentMode);
};
modebtn.addEventListener("click",mode);
