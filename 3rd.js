//****************************LOOPS*******************************
/*
//FOR LOOP
//prints Hello JS 10 times
for(let count=1; count<= 10; count++)
{
    console.log("Hello JS");
}
console.log("loop has ended");


let n=prompt("Enter the value of n : ");
let sum=0;
for(let i=0;i<=n;i++)
{
    sum=sum+i;
}
console.log("sum = ",sum);

//WHILE LOOP
let k=0;
while(k<=5)
{
    console.log("k =",k);
    k++;
}

//DO WHILE LOOP --> runs atleast onces
let j=10;
do{
    console.log("Hello");
    j++;
}while(j<11);

//FOR OF --> strings & arrays, not for OBJECTS

let str="rahul gupta";
let size=0;
for(let i of str)
{
    console.log("i=",i);
    size++;
}
console.log("size = ",size);

//FOR IN LOOP --> object & arrays

let student={
    name : "rahul gupta",
    age : 20,
    rollno:42,
    cgpa:9.5,
    isPass:true,
};

for(let key in student)
{
    console.log("key =",key, "value =", student[key]);
}

//practice ques 1 -- print even no form 0 to 100
for(let i=0;i<=100;i++)
{
    if(i%2==0) console.log(i);
}

//practice ques 2 -- guessing number game

let guessNo=24;

let userNo = prompt("Guess the number : ");

while(guessNo!=userNo)
{
    if(userNo>guessNo) 
    {
        userNo=prompt("Number is lower then your number,Guess the number again : ");
    }else if(userNo<guessNo){
        userNo=prompt("Number is higher then your number,Guess the number again : ");
    }
}
console.log("Congratualtion, You hve guessed the number");
*/



//***********************STRINGS**********************************
let str="rahulgupta";
let str1='neha';

//str.length -- 10 -- gives length of string

//TEMMPLATE LITERALS
//template literals in JS -- by using backticks
//A WAY TO HVE EMBEDDED EXPRESSION IN STRINGS
//in template literals we can write variables in the strings***

//STRING INTERPOLATION--> to create strings by doing substituion of placeholders
//it can also hve EXPRESSIONS embedded
//using ${expression}
let obj={
    item:"pen",
    price:10,
};
console.log("The cost of", obj.item, "is", obj.price, "rupees");
//the more better way of doing ABOVE thing is by using template literals
console.log(`The cost of ${obj.item} is ${obj.price} rupees`);


let specialString=`this is a template literals`;
console.log(specialString);
console.log(typeof specialString);

console.log(`the sum of 1+2+3 is ${1+2+3}`);

//espace character ki length \n --> 1 and not 2

//STRING METHODS --> never make changes to original strings 
//create one otherstring and changes are made in that
//str.toUpperCase()
//str.toLowerCase()
//str.trim() --> REMOVE WHITESPACE FROM END AND BACK

//***string are immutable in JS***
let s1="   rahul gupta    ";
console.log(s1);
console.log(s1.toUpperCase());
console.log(s1.trim());

let s2="rahul";
//str.slice(start,end) --> end is excluded
console.log(s2.slice(0,4));  // retuns rahu

//str1.concat(str2);  -- can also be done by using +
console.log(s1.concat(s2));

let res="i am" + s1 +s2;
console.log(res);

//replacing values in string
//str.replace(searchval,newval);
console.log(`${s1} is replaced by ${s1.replace("rahul","neha")}`);

s3="helololo";
//str.replaceAll("searchVal","newVal"); -->replaces all not only the 1st occurance
console.log(`${s3} is replaced by ${s3.replaceAll("l","p")}`);

//to return any index value -- str.charAt(index);
console.log(s2.charAt(0)); //r


//practice question
/*prompt the users to enter their full name. Generate a username for them
based on the input. Start username with @, followed by ther fullname and ending
with the fullname lenght*/

let fName = prompt("Enter you name to generate username : ");

let num = fName.replace(/\s/g,"").length;
console.log(`@${fName.replace(/\s/g,"")}${num}`);

// ---> /s --> whitesspaces like tabs normal whitespaces newlines
// g ---> means global means select all not only the first one  MATCHES ALL
// DO IT EVERYWHERE --> g
// ---->  / container / --> /a/ --> look for character a
// ----> /d --> digits(0-9)
