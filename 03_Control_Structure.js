//Check IF num is Positive Negative or Zero

function result(num1) {
  if (num1 > 0) {
    console.log(`${num1} is Positive `);
  } else if (num1 == 0) {
    console.log(`${num1} is Zero`);
  } else {
    console.log(`${num1} is Negative `);
  }
}
result(20);
// result(0)
// result(-10)

// check if a person is eligible to Vote (age >= 18)

function check_vote(age) {
  if (age >= 18) {
    console.log(`You are Eligible For Voting`);
  } else {
    console.log(`You Are Not Eligible For Voting`);
  }
}
check_vote(22);

// Nested If - Else

function max(a, b, c) {
  if (a > b) {
    console.log(a);
  } else if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
max(10, 20, 30);

// Switch Case
var key = 'B'
function Weekday(key) {
  switch (key) {
    case "A":
      console.log(`MONDAY`);
      break;
    case "B":
      console.log(`TUESDAY`);
      break;

    case "C":
      console.log(`WENDSDAY`);
      break;
    default:
      break;
  }
}
Weekday(key)
// Weekday('A')


// Ternary Array [Conditional Array]

function oddEven(num){
(num%2 == 0) ?  console.log("This is Even") : console.log("THis Odd");
}
oddEven(20)

// Leap year or not using Multiple Condition (Divisible by 4 , but not 100 unless also divisible 400)