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

let prices = [250,645,300,900,50];

// for (let indx = 0; indx < prices.length; indx++) {
//     prices[indx] = prices[indx] - (prices[indx]*0.1);
// }
// for(let price of prices)
// {
//     console.log(price);
// }

let i=0;
for(let val of prices)
{
    console.log(`value of index ${i} = ${val}`);
    let offer = val/10;
    prices[i] = prices[i]-offer;
    console.log(`value after offer = ${prices[i]}`); 
    i++;
}

//array methods
// push() --> to add something at the end

let foodItems = ["tomato", "potato","apple","banana","orange","milk"];
foodItems.push("cheese");

//pop() --> delete from end & return
console.log(foodItems);
let delVal = foodItems.pop();
console.log(foodItems);
console.log("deleted item = ",delVal);

//toString() --> converts arrays to string
console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems);

//concat() --> joins multiple arrays & returns result
let marvel_heros = ["ironman","spiderman","thor","hulk"];
let dc_heros = ["superman" ,"batman"];

let mrvl_dc_heros = marvel_heros.concat(dc_heros);
console.log(mrvl_dc_heros);

//unshift() --> add element to start 
marvel_heros.unshift("shaktiman");
console.log(marvel_heros);

//shift( ) --> delete from start and return 
dc_heros.shift();
console.log(dc_heros);

//slice() --> returns a piece of array
// slice(startIndex, endIndex);  endIndex excluded

console.log(marvel_heros.slice(2,4));


let a1 = [1,2,3,4,5,6,7];
//splice() --> change original array(add, remove, replace)
// splice(startIndex, delCount, newElement1, newElement2...);
// a1=[1,2,3,4,5,6,7]
// splice(2,2,101,102)
// a1 =[1,2,101,102,5,6,7]
console.log(a1);
a1.splice(2,2,101,102);
console.log(a1);

//add element
a1.splice(2,0,100);
console.log(a1);

//delete element
let a2 = [1,2,3,4,5]
console.log(a2);
a2.splice(4,1);
console.log(a2);

//replace element
a2.splice(2,1,9);
console.log(a2);

//practice ques
// create an array to store company - bloomberg, microsoft, uber, google, ibm, netflix
// a) remove the first company from the array
// b) remove uber & add ola in its place
// c) add amazon at the end

let companies = ["bloomberg", "microsoft","uber","google","ibm","netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(1,1,"ola");
console.log(companies);

companies.push("amazon");
console.log(companies);
