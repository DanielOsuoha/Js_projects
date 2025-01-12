// console.log("Starting server")
// let  height  =  180;
// let  anotherHeight  =  height;
// let  weight;
// console.log(height);  //  ->  180
// console.log(anotherHeight);  //  ->  180
// weight  =  70;    
// console.log(weight);  //  ->  70


// We can ensure we are using modern javascript standards by adding "use strict" at the beginning of the script (we define variables before we use em)
// "use strict";
// let height = 180;
// height = "change height";
// console.log(height);

// Variables
let greeting = "Hello";
let counter = 100;
console.log(greeting + " " + counter + "!");
const greet = "Hello!";
// greet = "Hi!"

// Block
let count = 0;
console.log(count);  // -> 0
{
  let count = 5;
  console.log(count);  // -> 5
}

// let v var
var  height  =  180;
{
         var  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  70
