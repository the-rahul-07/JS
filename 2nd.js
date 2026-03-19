// artimetic operators
let a = 7;
let b = 3;

console.log("a=",a,"b=",b);
console.log("a + b =",a+b); 
console.log("a - b =",a-b); 
console.log("a * b =",a*b); 
console.log("a / b =",a/b); 
console.log("a % b =",a%b); 
//exponentiation
console.log("a**b=",a**b);

//unary operator
let x=5;
let y=8;
console.log("x=",x,"y=",y);
x++; //6  post increment 
y--; //7  post decrement
console.log("x=",x);
console.log("y=",y);

console.log("x++ = ",x++);
console.log("x=",x);
console.log("++x = ",++x); //pre increment
console.log("--x = ",--x); //pre decrement

// assignment operator

a+=3; //a=a+3;
console.log("a=",a);
b**=2; // b = b**3; -- b^3
console.log("b=",b);

//comparsion operator
/*
== equal to
!= not equal to
=== strict equal to --> for other datatypes
!== strict not equal to --> for other datatypes
*/
//5==3,false
console.log(a,"==", b,a==b);
console.log(a,"!=", b,a!=b);

let m = 8;   //number
let n = "8"; //string-->number
console.log(m,"==", n,m==n);
console.log(m,"===", n,m===n);
console.log(m,"!==", n,m!==n);

//logical operator

/*
AND &&
OR ||
NOT !
*/
let cond1 = a>b;
let cond2 = a==6;
console.log("cond1 && cond2 =",cond1&&cond2);
console.log("cond1 || cond2 =",cond1||cond2);
console.log("!(10<6)",!(10<6));

// conditional statments
let age =20;
if(age >= 18){
    console.log("You can vote");
}
else{
    console.log("you cannot vote");
}

let num=20;
if(num%2===0){
    console.log(num, "is even");
}else{
    console.log(num, "is odd");
}

/*
if(){

}elseif(){

}else{

    }
*/

//turnary operator
//cond ? ture operator : false operator

let reusult = age>18 ? "adult":"not adult";
console.log(reusult);

//alert 
alert("Hello JS"); //one time popup

//prompt 
let fullName = prompt("Enter you name : ");
console.log(fullName);

//practice ques 1
// enter a number form user and check weather its multiple of 5 or not
let n1 = prompt("Enter a number");
if(n1%5===0){
    console.log(n1, "is multiple of 5");
}else{
    console.log(n1, "is not multiple of 5");
}

//practice ques 2
//grade of student based on marks
let score = prompt("Enter you marks (0-100)");
if(score>=80 && score<=100)
{
    console.log("Grade : A");
}else if(score >= 70){
    console.log("Grade : B");
}else if(score >= 60){
    console.log("Grade : C");
}else if(score >= 50){
    console.log("Grade : D");
}else{
    console.log("Grade : Fail");
}