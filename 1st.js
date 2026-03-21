console.log("Hello JS");
console.log("Rahul G here");

fullname="tony stark";
age=20;
x=null;
y=undefined;
isFollow=true;  //camelcase
/*
fullName -- camel case
full_name -- snake case
full-name -- kebab case
FullName -- pascal case
*/
var lastName = "gupta";
/*var was older way to define variable before 2015
in var we can declare same variable as many times we 
want but in let we cant redeclare the variable but 
we can update it
const value cannot we redeclared or changed/updated
after 2015 js got updates and we got "let" and "const"*/
let firstName = "rahul g";
let a; // -- gives as UNDEFINED no errors
// const b;  //this gives error, bcoz for is we say its const then we hve to assign some value to it
console.log(fullname);
console.log(age);
console.log(x);
console.log(y);
console.log(isFollow);
console.log(lastName);
console.log(firstName);
console.log(a);

let m = BigInt("1234");  //BigInt ke end mai "n" aata hai
console.log(m);

let n = Symbol("werus");
console.log(n);

/*datatype -- i)primitive ii)nonprimitive 
there are 7 types in primitive -- number,boolean,string,undefined,null,symbol,BigInt
nonprimitive -- objects 
*/

// objects
const student = {
    // key:value
    // fName is key and rahul gupta is value
    fName : "Rahul Gupta",
    age : 20,
    cgpa : 9.5,
    isPass : true
};
console.log(student);

/*To access values
2 methods
object.keyname
object["keyname"]
*/

console.log(student.fName);
console.log(student["age"]);
console.log(student.cgpa);
console.log(student.isPass);

student.fName="Rahul Kumar Gupta";
console.log(student.fName);

student.age = student.age+1;
console.log(student.age);

/*
here we are updating values of object even though its of type const
coz we can change key of object of type const
it gives error when we change whole objects
*/

//practice ques1
const product = {
    title : "Ball pen",
    rating : 4,
    discount : 5,
    price : 270
};
console.log(product);

//practice ques2
const profile = {
    username : "shradha k",
    isFollow : true,
    post : 195,
    followers : 596000,
    following : 4,
}
console.log(profile);