let responce :any = "43";

let numericLength :number = (responce as string).length; // This will not cause an error because responce is of type any
console.log(numericLength); // Output: 2


type Book = {
    name:string;
}

let bookString = '{ "name": "The Great Gatsby" }';
let book: Book = JSON.parse(bookString) as Book;

console.log(book.name); // Output: The Great Gatsby

const  inputElement = document.getElementById("myInput") as HTMLInputElement;      ///type assertion is used to tell the compiler that we know the type of the element we are trying to access, even if it cannot be determined at compile time. In this case, we are asserting that the element with id "myInput" is an HTMLInputElement, which allows us to access properties specific to input elements without TypeScript throwing an error.

// let value :any;

// value = 'chai';
// value = [6,7,8];
// value= 78.8;
// value.upperCase(); // This will not cause an error because value is of type any, but it will cause a runtime error if value is not a string at the time this line is executed.

// // if used unknown than it will cause error


let value :unknown ;

value = 'chai';
value = [6,7,8];
value= 78.8;
if(typeof value === "string"){
    console.log(value.toUpperCase()); // This will ork because we have checked that value is a string before calling toUpperCase()
}

try {
    let value: unknown = 10;

    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }

} catch (error) {

    if (error instanceof Error) {
        console.log(error.message);
    }

}

const data: unknown = "Hello, World!";
const strData: string = data as string; // Type assertion to treat data as a string
console.log(strData.toUpperCase()); // Output: HELLO, WORLD!

type role = "admin" | "user" | "guest";

function redirect(role: role): void {
if(role === "admin"){
    console.log("Redirecting to admin dashboard...");
    return 
}
if(role === "user"){
    console.log("Redirecting to user homepage...");
    return  
}
role;// This will cause an error because role is of type role, which can only be "admin", "user", or "guest". The function does not handle the case where role is "guest", so TypeScript will throw an error indicating that not all code paths return a value.
}

function neverreturn():never{
    while (true){}
}