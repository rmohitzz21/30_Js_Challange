// Function Declration 1

function OddEven(num){
    if(num%2 == 0) {
        console.log(`${num} is Evem num`);       
    }else{
        console.log(`${num} is odd num`);
    }
}
OddEven(21)

// 2 : Sqare Of Number 

function sq(num1){
    ans = num1 * num1
    console.log(ans);
}

sq(4)

// Function Expression 
// Task 3: maximum of 2 num

function maxTwo(a,b){
    if(a>b){
        console.log(`${a} is Max`);
    }else{
        console.log(`${b} is Max`);
    }
}
maxTwo(20,40)

//  Task 4 : Concatenate Two String 

function conc(str1,str2){
    result = str1 + str2
    console.log(result);
}
conc("Helllo "," World")

// Task 5 : Arrow Function Sum Of Two Number 

const sum = (num1,num2) =>{
    res = num1+num2
    console.log(res);
}
sum(10,10)

//  Task 6 : Arrow Function TO check string contain specific char and return boolean values

const bool = (str) =>{
    if(str == ""){
        console.log(false);
    }else{
        console.log(true);
    }  
}
bool()

// Task 7 function para and default value -> take 

// let pr2 ="Ball"
function product(pr1,pr2 = "Ball"){
    console.log(`this is product1 ${pr1}`);
    console.log(`this is product2 ${pr2}`);
}

product("Bat")


// Task 8  : 

function persons(name,age){
    console.log(`Hello My name is ${name} My Age is ${age}`);

}
persons("Mohit",22)

// Task 9 High Order Functions


// In JavaScript, a higher-order function is a function that can accept other functions as arguments, return functions, or both


// A function which take another function as argument
// or return function from is known high order


function highOrder(callback){
    callback();
}

function callbackFunction(){
    console.log("Call back function is executed");
}
highOrder(callbackFunction)

function cal(callback,number){
    callback();
}


// -----------------

const radius = [2,3,4,5]

const area = function(radius){
    return Math.PI * radius * radius;
}
const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const calculate = function (radius , logic){
    const output =[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));


// 

