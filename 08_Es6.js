// -------Template Literals ----------

var name = "Iron Man";
var age = 56;

console.log(`Here is ${name} and my age is ${age}`);

console.log(`This is 'Captain' call , We need to talk with "${name}" `);

// --------Destructuring -----------------

//----> Object Destructure 

const course = {

        title_Name :"Js - Mastery",
        author_Cretaor : "Hitesh Chaudary",
        year :2023

}

// console.log(course.title_Name); This became to Long then we use 

const {title_Name : title, author_Cretaor} = course
console.log(title);
console.log(author_Cretaor);



// ---> Array Destrucure 
const mca = ["RDBMS","C lan","FOC","PHP"];

var [sub1,sub2,sub3,sub4] = mca;
console.log(sub2);


// ----------Spread AND Rest-----------

// ...args  spread :

// var myA = [1,2,3,4,5,6];
// console.log(...myA);      //spread op
 


// sum(...args) is called the rest parameter.

// Spread Operator: Used in function calls, array literals, and object literals.
// Rest Parameter: Used in function parameter lists and destructuring assignments.

function sum(...args){  // Rest 
        let sum = 0;
        for(const arg of args){
                sum += arg;
        }
        return sum;
}

// console.log(sum(1,2,3,4,5));

const num = [1,2,3,4,5];  
console.log(sum(...num));  //Spread



// --------------Default Parameter -----------------


function prod(prd1,prde2="amul"){
        return `${prd1} is better than ${prde2}`;
}
console.log(prod("Go"));


// ---------------Object Literals ---------------------

// const jsUser = {
//         Name : "Mohit",
//         Age : 22,
//         Localtion : "Ahemdabad",
//         email : "Rmohit@",
//         isLogin : true
//  }

//  console.log(jsUser.Name);
const prop1 = 'Value1';
const prop2 = 'value2';

function method1() {
        console.log('This is Method1');
}

const method2 = function(){
        console.log('This is Method2');
};

const myObj = {
        prop1,
        prop2,
        method1,
        method2,
        method3(){
                console.log('This is method3');
        },
        ['computed' + 'prop'](){  //Computed property name
                console.log("This is computed property method");
        }
};

console.log(myObj);
myObj.method1();
myObj.method3();
myObj.method2();
myObj.computedprop();