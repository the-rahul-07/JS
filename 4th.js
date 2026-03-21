let marks = [34, 66, 77, 73, 88];
console.log(marks);
console.log(marks[3]);

let heros = ["ironman","spiderman","thor","batman","hulk"];

for (let idx = 0; idx < heros.length; idx++) {
    console.log(heros[idx]);
}
console.log("\n");
//for IN
for(let hero of heros){
    console.log(hero);
}

//practice ques 
let marks1 = [85, 97, 44, 37, 76,60];
let sum = 0;
for(let val of marks1){
    sum += val;
}
console.log("average marks of class : ", sum/marks1.length);