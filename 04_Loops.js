// print 1 to 10 number using for loop

// let index = 1;
// for (index; index <= 10; index++) {
//   console.log(`This is ${index}`);
// }

// Multiplication Table

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// sum of 1 to 10 number
// let sum = 0;
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
//   sum += i;
// }
// console.log(sum);

// Do - While
// let k = 1;
// do {
//   console.log(k);
//   k++;
// } while (k <= 10);

// Factorial

// let fact = 1;
// let z = 1;
// do {
//   console.log(z);
//   z++;
//   fact = fact * z;
// } while (z < 4);
// console.log(fact);

// Nested Loop  Numeric  Pattern

// let rows = 5;
// let pattern = ""

// for(let n = 1; n <= rows ; n++){
//     for(let num =1; num <= n; num ++){
//         pattern += num
//     }
//     pattern += "\n";
// }
// console.log(pattern);


// Reverse Pattern 

// let row = 5;
// let patterns = "";

// for(let n =1 ; n <= row ; n++){
//     for(let space = 1;space <= row -n; space++){
//         patterns += " ";
//     }

//     for(let num = 1; num <= n; num++){
//         patterns += "*";
//     }
//     patterns += "\n";
// }
// console.log(patterns);

let rows = 5;
let pattern = "";

for(let n =1;n<=rows;n++){
    for(let num=1;num<=n;num++){
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);