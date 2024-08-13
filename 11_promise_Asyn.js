// //Promises and Async / Await


// ---------"I will finish later!"-------------------

// Functions running in parallel with other functions are called asynchronous

// In JavaScript, promises and async/await are two different ways to handle asynchronous operations. But they are closely related.

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Task 1: Create Promise that resolves with a message after 2 sec time out and log the message

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Task is Completed");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

// // Task2 : create promise that reject with an error message after 2 sec time out and handle Error using catch()

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ UserName: "Mohit", Password: 12345 });
    } else {
      reject("ERORR :Something Went Wrong");
    }
  }, 2000);
});

promiseTwo
  .then(function (user) {
    console.log(user);

    return user.UserName;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });

// // Chainning Promise

function fetchData(msg, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, delay);
  });
}

fetchData("Fetching Data From server1 ..", 1000)
  .then(function () {
    fetchData("Fetching Data From Server 2", 2000);
  })
  .then(function () {
    fetchData("Fetching Data From Server 3", 1500);
  })
  .then(function () {
    fetchData("Fetching Data From Server 4", 500);
  })
  .catch(function (error) {
    console.log("ERROR", error);
  });

// Using Async / Await

// Resolve And reject

const As = new Promise(function (resolve, reject) {
  console.log("Lets Waits For Result :");
  setTimeout(function () {
  

    let error = false;
    if (!error) {
      resolve({ UserName: "Mohit", Age: 22, Study: "MCA" });
    } else {
      reject(" Fail To LOAD");
    }
  }, 2000);
});

async function wait() {
  try {
    const response = await As;
    console.log(response);
  } catch(error) {
    console.log(error);
    
  }
}

wait()

// ---------Fetching Data From An API -----------

// using Promise
fetch('https://api.github.com/users/rmohitzz21')
.then( (response) =>{
  return response.json()
})
.then((data ) =>{
  console.log(data);
  
})
.catch((error) => console.log(error))

// Using Async/Await

async function getAllUsers(){
  try{
         const response = await fetch('https://api.github.com/users/rmohitzz21');
         console.log(response);
         const data = response.json();
         console.log(data);
     } catch(error){
      console.log("E : ",error);
      
     }
}

getAllUsers();

// --------Concurent Promise-----------
// Promise.all() : The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 


const p1 = Promise.resolve(21);
const p2 = 42;
const p3 = new Promise( (resolve,reject) => {
  setTimeout(resolve, 1000,'Hello');
});

Promise.all([p1,p2,p3]).then(  (val) =>{
  console.log(val);
  
})

// promise.race() :  The Promise.race() static method takes an iterable of promises as input and returns a single Promise.


const promise1 = new  Promise(function(resolve,reject){
  setTimeout(resolve,500,'one');
});

const promise2 = new Promise(function(resolve,reject){
  setTimeout(resolve,100,'two');
});


Promise.race([promise1,promise2]).then( (val)=>{
  console.log(val);
  
});