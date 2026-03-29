const student = {
    fullName: "rahul g",
    marks: 99,
    printMarks: function () {
        console.log("marks = ", this.marks);
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
    //if object & prototype have same method, objects method will be used
};
karan.__proto__ = employ;   

//class is a program code template for creating objects

