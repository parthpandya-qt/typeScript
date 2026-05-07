const chaiFlavour: string[] = ["masala", "ginger", "cardamom"];

const rating:number[] = [4.5, 4.0, 5.0];

const likes:Array<string> = ["Parth", "Rohit", "Sita"];

type name={
    name: string;
    age:number;
}

const user:name[] = [{name: "Parth", age: 25}, {name: "Rohit", age: 30}, {name: "Sita", age: 28}];

const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"];
// cities.push("Chennai"); // Error: Cannot add to a readonly array

const multidimensionalarray: number[][] = [[1, 2], [3, 4], [5, 6]];    




//-------------------Tuples-------------------------------------------------

// In TypeScript, a tuple is a special type of array where:

// The number of elements is fixed
// The type of each element is fixed
// The order matters

let tuples:[string, number];

tuples = ["Parth", 25]; // This is valid because the first element is a string and the second element is a number
// tuples = [25, "Parth"]; // This will cause an error because the order of the types is incorrect

const location:readonly [number, number] = [40.7128, -74.0060]; 


const chaiItem:[name:string, price:number] = ["Masala Chai", 2.5];


//-------------------Enum-------------------------------------------------------------------------------------------

enum cupSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

const size = cupSize.Medium; 

enum Status{

    Pending = 100,
    InProgress, //auto assign 101
    Completed // auto assign 102
}