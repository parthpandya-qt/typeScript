// type annotation you give types to the variables

const name:string = "Parth";
const Age:number = 22;
const isStudent:boolean = true;


//A type reference means using an already defined type somewhere else.

//Instead of writing the type again, you reference it
type User = {
  name: string;
  age: number;
};

let student: User = {
  name: "Parth",
  age: 20
};