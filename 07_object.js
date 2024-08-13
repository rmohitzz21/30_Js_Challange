// ----------Task 1: Object Creattion And Access-------

// singleton

// objetc Literals

// Object.create : construction method
const Books = {
  title: "Avenger Infinty War",
  author: "IronMan",
  Temp: "temp", // not access through . operator
  Year: 2021,

  getsummary: function () {
    return `${this.title} by ${this.author}`;
  },
  Add: function (year) {
    return (year = 2024);
  },
};
//

// console.log(Books);
console.log(Books.title);
console.log(Books.author);
console.log(Books["Temp"]);

// ------ Activity 2: Object Methods-----------

// Task3 :

// console.log(`Title : ${Books.title}  & Author ${Books.author}`);
// Books.Year = 2024;
// console.log(Books);
console.log(Books.getsummary());
console.log(Books.Add());

// -----Nested Objects -----------

const library = {
  name: "School Library",
  Book: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      Add: function () {
        return `${this.title} wriiten by ${this.author}`;
      },
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,

      Add: function () {
        return `${this.title} wriiten by ${this.author}`;
      },
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      Add: function() {
        return `${this.title} wriiten by ${this.author}`;
      }
    },
  ],
};

console.log(library);

// Acceess Each title from books array

library.Book.forEach((bk) => {
  console.log(bk.title);
});


// --------This -------------------
// Access Method 
library.Book.forEach( (bk) =>{
    console.log(bk.Add());
})


// ----Object Iteration -------------------
console.log("--------------------------");
 for(const key  in Books){
    console.log(`${key} : ${Books[key]}`);
 }

 const key = Object.keys(Books)
 console.log(key);

 const val = Object.values(Books)
 console.log(val);