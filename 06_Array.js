// Task 1 Array creation and Access

const arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

console.log(arr[0]);
console.log(arr[4]);

// Task 2: Array Method (Basic)

console.log(arr.push(10));
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log(arr.shift()); // Delete value from last
console.log(arr);

console.log(arr.unshift(12)); //Add value from starting
console.log(arr);

// Task 3 Array Methods (InterMediate)

// Use Map method to create a new array where each number is doubled and log the new Array

const myArr = [2, 4, 5, 6, 8];

const doubleArr = myArr.map((num) => num * 2);
console.log(doubleArr);

// Use filter method to create a new Array with only Even number and log the new Array

const MyArr1 = [1, 2, 3, 4, 6, 7, 9, 8, 10, 12];

const Even = MyArr1.filter((num) => num % 2 == 0);
console.log(Even);

const Val = MyArr1.filter((num) => num > 5);
console.log(Val);

//Use REDUCE method to calculate the Sum of all num in array

const MyArr2 = [1, 2, 3, 4, 5];
const sum = MyArr2.reduce((acc, curVal) => acc + curVal, 0);
console.log(sum);

// -------Array Iteration

// Task 10 : Use a For Loop to iterate over the Array and log the elements to the console
const loop1 = ["ABDC", "BCD", "CDE", "DEF"];

for (let index = 0; index < loop1.length; index++) {
  const element = loop1[index];
  console.log(element);
}

// Task 11 : Use the forEach Method TO iterate 

const loop2 = ["Ruby","Python","Js","Java","Php"]
const example = loop2.forEach( (item) => {
    console.log(item);
} )


// Task 12 : Create Two Dimentional Array


const matrix = [[1,2,3],
[4,5,6],
[7,8,9]


];

for (const iter of matrix) {
    console.log(iter);
    // console.log(iter[1]);
}
