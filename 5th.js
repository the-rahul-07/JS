function myFunction(){
    console.log("Hello everyone !");
    console.log("We are learning JS :)");
}

myFunction();

function func1(msg){
    //parameter -> input
    console.log(msg);
}
func1("I love JS");  //argument

function sum(x,y){
    return x+y;
}
let val = sum(2,4);
console.log(val);

//arrow function
const arrowSum = (a,b) => {
    console.log(a+b);
};

//arrow function
const arrowMul = (x,y) => {
    console.log(x*y);
};

//practice ques 
// create a function using the "function" keyword that takes a string as an argument & returns
// the number of vowels in the string

function findVowel(a){
    cnt=0;
    for(let indx of a){
        if(indx === "a" || indx === "e" || indx === "i" || indx === "o" || indx === "u"){
            cnt++;
        }
    }
    console.log(`the no of vowels = ${cnt}`);
}

//create a arrow function to perform the same task 
const cntVowel = (a) =>{
    cnt=0;
    for(let indx of a){
        if(indx === "a" || indx === "e" || indx === "i" || indx === "o" || indx === "u"){
            cnt++;
        }
    }
    console.log(`the no of vowels = ${cnt}`);       
}

//IN JS FUNCTIONS CAN BE PASSED AS PARAMETER/argument
//AND ALSO CAN BE RETURNED THIS IS *SPECIAL THING IN JS*

//forEach loop in array --> ONLY USED FOR ARRAY AND NOT FOR STRINGS
//callBack function : a callback is a function passed as an argument to another function
//forEach --> higher order function or method
//arrayname.forEach((val,index,array) =>{work});
let arr = ["pune","mumbai","delhi","hyderabad","bangalore","chennai"];

arr.forEach((val,indx,arr)=>{
    console.log(val.toUpperCase(),indx,arr);
});

let a1 = [1,2,3,4,5];

a1.forEach((val)=>{
    console.log(val*val);  //val**2
});

//some more array methods
//MAP METHOD --> similar to forEach but diffrence
//is it creates a new array with the result of some operations
//arr.map(callbackfun(value,index,array))

console.log("\n");
a2 = [34,64,234,64,11,63];

let newA2 = a2.map((val)=>{
    return val;
});
console.log(newA2);

//filter method --> creates a new array of element that gives true for cond/filter

let evenA2 = a2.filter((val) => {
    return val%2 == 0;
});
console.log(evenA2);

//reduce method --> performs some operation & reduces the array to single value. 
// It returns that single value

let a3 = [1,2,3,4];

const output = a3.reduce((result, current) => {
    return result+current;
});
console.log(output);

//max value in array
let a4 = [3,6,8,9,12];

let maxVal = a4.reduce((prev,curr) => {
    return prev>curr ? prev : curr;
});
console.log(maxVal);

//practice questions
//we hve given array of marks of students. filter out of the marks of student that scored 90+;

let mrk = [23,56,88,99,86,91,33,94,93,43,60,97];

let bstmrk = mrk.filter((m) => {
    return m>90;
});
console.log(bstmrk);

//take a number n as input form user. create an array of numbers from 1 to n
//Use the reduce method to calculate sum of all numbers in the array
//Use the reduce method to calculate product of all numbers in the array

let n = prompt("Enter n : ");

let a5 = [];
for (let i = 1; i <= n; i++) {
    a5[i-1] = i;
}
console.log(`a5 = ${a5}`);

let sumA5 = a5.reduce((prev,resl)=>{
    return prev+resl;
});
console.log(`Sum of a5 = ${sumA5}`);

let prodA5 = a5.reduce((prv,resl) => {
    return prv*resl;
});
console.log(`product of a5 = ${prodA5}`);