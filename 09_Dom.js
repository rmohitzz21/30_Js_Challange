// ----- Selecting and Manipulating --------------------

// task1 :Select html element by its id and change its content 

document.getElementById('head').innerHTML="Hello";
document.getElementById('para').innerHTML="We can change the para through js";

// ----------------------------------------------
// Taks 2: slect html element by its class change its background color

const temp = document.getElementsByClassName('list-item');
const myArr =  Array.from(temp);
myArr.forEach(function (li){
    li.style.backgroundColor = "yellow";
    li.style.color = "black"
})

// -------Creating and Appending Elements -------------------


//  Method 1 -- Traversing Require 
function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
  const parentElement =  document.querySelector('.lan')
   parentElement.appendChild(li);
}
addLanguage("js");
addLanguage("Python");
addLanguage("Ruby");

// Method 2 ----
function addOtionalLanag(langName){
    const li = document.createElement('li');
    const AddText = document.createTextNode(langName);
    li.appendChild(AddText);
    document.querySelector('.lan').appendChild(li)
}

addOtionalLanag("Go Lan")

// ----------Removing Element --------------------

const second = document.querySelector('li:nth-child(2)') // 3rd element
second.remove();


const first = document.querySelector('li:lats-child'); //Last element  
first.remove();





// ------ Modifying Attributes and Classes-----------------

// Change imge src from xyz to abc.jpg
const Newimg = document.querySelector('img');
Newimg.outerHTML ="<img src ='abc.jpg'>";

// Add Css Class in ul tag

const newcss = document.querySelector('#css');
newcss.classList.add('NewCss');
const one = document.querySelector('.new');
one.style.backgroundColor="red";


// Remove

newcss.classList.remove('NewCss');


// --------------Event Handling -----------------

function func(){
  const chg = document.querySelector('.crack');
 const hl = chg.textContent = "Hell0"
  chg.replaceWith(hl)
}

function over(){
    const two = document.querySelector('img');
    two.style.border = "10px solid green";
}