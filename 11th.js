const student = {
    fullName: "rahul g",
    marks: 99,
    printMarks: function () {
        console.log("marks = ", this.marks); //student.marks
    },
};
//JS objects hve a special property called prototype

const employ = {
    calcTax1() {
        console.log("taxs are 10%");
    },
    // calcTax2 : function () {
    //     console.log("taxs are 10%");
    // }
    //both are correct but we use 1st as it is simple
};

const karan = {
    salary: 50000,
    caltax1() {
        console.log("taxs are 20%");
    }
    //if object & prototype have same method, OBJECT METHOD WILL BE USED
};
karan.__proto__ = employ;

//CLASSES
//class is a program code template for creating objects

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("created new object");
        this.brand = brand;
        this.milage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand;
        //whatever is with this 
    }
    //this are functions or methods in the class this are not objects
}
//creating object from the class
//let newObj = new MyClass();
let fortuner = new ToyotaCar("forturner", 10);
// fortuner.setBrand("Fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");

//CONSTRUCTOR
//a constructor is automatically invoked when we create new object
//whenever 'new' keyword is used automatically the constructor is invoked
//even though its not created
//if we want to do a work during initialization thn we use constructor

//INHERITANCE
//passing down properties and methods form parent class to child class

class parent {
    hello() {
        console.log("Hello");
    }
};

class child extends parent {

}
let obj = new child();