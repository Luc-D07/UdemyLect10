"use strict";

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);

// const flight = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport!");
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// NOTES
/* 

    First-Class function: JS treats functions as 'first-class' citizens; This means that funtions
    are simply valies. Functions are just another 'type' of object

    Higher-Order function: a function that receives another function as an argument, that returns a
    new function or BOTH; This is only possible because of First-Class functions


*/

//-----functions accepting call back functions-----\

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// //Higher order function
// const trasnformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// trasnformer("JavaScript is the best!", upperFirstWord);
// trasnformer("JavaScript is the best!", oneWord);

// //JS uses callbacks all the time
// const high5 = function () {
//   console.log("wave");
// };
// document.body.addEventListener("click", high5);

// ["Jonas", "Martha", "Adam"].forEach(high5);

//-------- Functions returning functions -----

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Jonas");
// greeterHey("Steven");

// greet("Hello")("Jonas");

// //arrow function challenge
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArr("Hi")("Jonas");

// // Call and Apply Methods

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Jonas Schmedtmann");
// lufthansa.book(635, "John Smith");
// console.log(lufthansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// //Does not work
// // book(23, "Sarah Williams");

// //Call method--manually and explicitly sets the THIS keyword to any function we want to call
// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 582, "Mary Cooper");
// console.log(swiss);

// //Apply method-- doesn't receive a list of arguments, but instead an array of arguments
// const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // BIND METHOD -----//

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, "Steven Williams");

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Jonas Schmedtmann");
// bookEW23("Martha Cooper");

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// //Partial Application(preset paramaeters)

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// //Challenge
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// - - - - - - - - - - - CODING CHALLENGE #1 - - - - - - - - -

//Create a method called "registerNewAnswer" on the "poll" object
//method does 2 things : 1) display prompt window for the user to input the number of the selected option. Window should look like this: What is your favorite programming language 0. JS 1. Python 2. Rust 3. C++ (Write optional number)
//2) Based on the input number, update the answers array property. EX) if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense.

// Call this method whenever the user clicks the "Answer Poll" button

// Create a method "displayResults" which displays the poll results. The method makes a string as an input (called "type") which can be either "string" or "array". If type is "array" simply display the results array as it is, using console.log(). THis shouldl be the default option. If type is "string", display a string like "poll results are 12, 2, 4, 1"

// Run the "displayResults" method at the end of each "registerNewAnwer" is called.

// BONUS
// Use the "displayResults" method to display the 2 arrays in the test data. Use both the "array" and the "string" option. Do NOT put the arrays in the poll object! So what should the THIS keyword look like in this solution?

// const poll = {
//   registerNewAnswer() {
//     let prompt = prompt(
//       "What is your favorite programming language? 0. JavaScript 1. Python 2. Rust 3. C++ (Write optional number"
//     );
//   },
// };

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     //get the answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     //Register Answer
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// // poll.registerNewAnswer();

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// //BONUS
// poll.displayResults.call({ answers: [5, 2, 3] }, "string");

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFE
//-- a fuction that disappears after it is called once

// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();
// this function can be called later and used again; we do not want this^^

//IIFE
// (function () {
//   console.log("This will never run again");
// })();

// //not expressing a function/not giving it a name?/ will be the way to call a function once. Trick JS by wrapping it in ()

// (() => console.log("This will ALSO never run again"))();

// --------------------------     CLOSURES    --------------------
//a closure isn't explicity used, happens automatically in certain situations

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// // ------- More Closures ----- //

// let f;

// const g = function () {
//   const a = 23;

//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// h();
// f();

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding al ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

//---------- CODING CHALLENGE #2 -------//
/* TASKS
1. Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element('header') to blue, each time the body element is clicked. Do not select the h1 element again!

2. Explain why this worked. Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
