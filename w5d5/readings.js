// // const obj = {
// //   name: "Earl Watts"
// // };

// // // weird function; how is `this` supposed to be set if we don't call
// // // `greet` method style?
// // function greet(msg) {
// //   console.log(this)
// //   console.log(`${msg}: ${this.name}`);
// // }

// // greet.apply(obj, ["Hello"]);


// // // const obj = {
// // //   name: "Earl Watts"
// // // };

// // function greet(msg1, msg2) {
// //   console.log(`${msg1}: ${this.name}`);
// //   console.log(`${msg2}: ${this.name}`);
// // }

// // greet.call(obj, "Hello", "Goodbye");


// // // window.setTimeout( function() {
// // //   console.log('hello');
// // // }, 2000);

// const readline = require('readline');

// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)

//   input: process.stdin,
//   output: process.stdout
// });

// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);
// });

// console.log("Last program line");

// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function addTwoNumbers(callback) {
//   // Notice how nowhere do I return anything here! You never return in
//   // async code. Since the caller will not wait for the result, you
//   // can't return anything to them.

//   reader.question("Enter #1: ", function (numString1) {
//     reader.question("Enter #2: ", function (numString2) {
//       const num1 = parseInt(numString1);
//       const num2 = parseInt(numString2);

//       callback(num1 + num2);
//     });
//   });
// }

// addTwoNumbers(function (result) {
//   console.log(`The result is: ${result}`);
//   reader.close();
// });
