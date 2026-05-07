//In TypeScript, a union type allows a variable to hold multiple possible types

const value: string | number = "Hello"; // This variable can be either a string or a number

// variable airlineseat can only be one of the specified string literals: "window", "aisle", or "middle"
let airlineseat: "window" | "aisle" | "middle"="aisle"; // This variable can only be one of the specified string literals

airlineseat = "window"; // Valid assignment


const Number = [1, 2, 3, 4, 5]; // This variable can be an array of numbers

let evenNumber : number | undefined; // This variable can hold a number
for(let num of Number){
    if(num % 2 === 0){
        evenNumber = num; // This variable can be assigned a number from the array
        break;
    }
    evenNumber = 2
}

console.log(evenNumber); // Output: 2

//In TypeScript, any is a special type that disables type checking for a variable"This variable can hold anything."

let data: any;

data = 10;
data = "Parth";
data = true;
data = [1, 2, 3];