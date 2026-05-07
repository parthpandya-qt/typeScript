interface Chai{
    flavour: string;
    size: "small" | "medium" | "large";
    price: number;
    milk?: boolean; // This is an optional property, meaning it may or may not be present in objects of type Chai.
}

const masalaChai: Chai = {
    flavour: "masala",
    size: "medium",
    price: 10,
}

interface shop{
    readonly id: number; 
    name: string;
}
const s : shop = {id:1,name:"Chaiwala"}

interface DiscountCalculator{
    (price:number): number;
}

const apply50 : DiscountCalculator = (price) => price * 0.5;

interface TeaMachine{
    start(): void;
    stop(): void;
}

const machineT:TeaMachine = {
    start(){
        console.log("Tea machine started.");
    },
    stop(){
        console.log("Tea machine stopped.");
    }
}


interface ChaiRating{
    [flavour: string]: number; // This is an index signature that allows objects of type ChaiRating to have properties with string keys and number values.
}


const rating : ChaiRating = {
    masala: 4.5,

}

//----------------------------------------

interface User{
    name:string;

}

interface User{
    age:number;
}

const u : User = {
    name: "Alice",
    age: 30
}

interface A {
    name: string;
}
interface B{
    age:number;
}

interface c extends A, B{}