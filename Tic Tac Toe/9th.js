let modebtn = document.querySelector("#themebtn");
let currentMode = "light";

const mode = () => {
    if (currentMode === "light") {
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
        currentMode = "dark";
    } else {
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.add("dark");
        currentMode = "light";
    }
    console.log("current mode -", currentMode);
};
modebtn.addEventListener("click", mode);

let pointer = "Player 1";
let point = document.querySelector("#pointer");
let boxes = document.querySelectorAll(".boxs");
let msgContainer = document.querySelector(".hide");
let rstbtn = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");

//my logic
// const point=(e)=>{
//     if (!e.target.classList.contains("boxs")) return;
//     if(pointer==="Player 1"){
//         document.querySelector("#pointer").innerHTML = "Pointer - Player 1";
//         e.target.innerText = "X";
//         pointer = "Player 2";
//     }else if(pointer==="Player 2"){
//         document.querySelector("#pointer").innerHTML = "Pointer - Player 2";
//         e.target.innerText = "O";
//         pointer = "Player 1";
//     }
// };
// document.querySelector(".game").addEventListener("click",point);

//apna clg logic
/**@type {html} */
let cnt = 0;
boxes.forEach((boxs) => {
    boxs.addEventListener("click", () => {
        cnt++;
        if (cnt === 9) {
            msg.innerText = "Game is Draw";
            msgContainer.classList.remove("hide");
            msgContainer.scrollIntoView({ behaviour: "smooth" });
        }
        if (pointer === "Player 1") {
            point.innerHTML = "<b>Pointer - Player 2</b>";
            boxs.innerText = "X";
            boxs.style.color = "red";
            pointer = "Player 2";
        } else if (pointer === "Player 2") {
            point.innerHTML = "<b>Pointer - Player 1</b>";
            boxs.innerText = "O";
            boxs.style.color = "darkblue";
            pointer = "Player 1";
        }
        boxs.disabled = true;
        checkwinner();
    });
});
let win = [    //index   0    1    2
    [0, 1, 2],      //0  0    1    2
    [0, 3, 6],      //1  0    3    6
    [0, 4, 8],      //2  0    4    8
    [1, 4, 7],      //3  1    4    7
    [2, 5, 8],      //4  2    4    8
    [2, 4, 6],      //5  2    4    6
    [3, 4, 5],      //6  3    4    5
    [6, 7, 8],      //7  6    7    8
];

/** @type {Html} */
const resetgame = () => {
    pointer = "Player 1";
    cnt = 0;
    point.innerHTML = "<b>Pointer - Player 1</b>";
    enableboxes();
    msgContainer.classList.add("hide");
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msgContainer.scrollIntoView({ behaviour: "smooth" });
    disableboxes();
};

const checkwinner = () => {
    for (let pattern of win) {
        let pst1val = boxes[pattern[0]].innerText;
        let pst2val = boxes[pattern[1]].innerText;
        let pst3val = boxes[pattern[2]].innerText;
        if (pst1val !== "" && pst2val !== "" && pst3val !== "") {
            if (pst1val === pst2val && pst2val === pst3val) {
                showWinner(pst1val);
            }
        }
    }
};
rstbtn.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);