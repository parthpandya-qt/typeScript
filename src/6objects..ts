//partials and required /////////////////////////


// const chai = {
//     name : "masalaChai",
//     price : 10,
//     isHot : true
// }

let tea:{
name: string;
price: number;
isHot: boolean
}

tea = {
    name: "Green Tea",
    price: 20,
    isHot: true
};
 //--------------------------------------------------------------
type coffee = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients?: string[]; // This is an optional property, meaning it may or may not be present in objects of type coffee.
}

const expresso : coffee = {
    name: "Expresso",
    price: 15,
    isHot: true,
    ingredients: ["coffee beans", "water"]
}

//ducktyping    Duck typing is a concept where an object is considered valid based on what it can do, not what it officially is.

type plane = {
    name :string;
}

let plane1 : plane = {
    name: "Boeing 747"
}

const plane2 = {
    name: "Airbus A380",
    capacity: 850
}

plane1 = plane2; // This is valid because plane2 has at least the properties of plane1, even though it has additional properties. This is an example of duck typing.

//jyada hogo to problem nai nhai par agar kam hoga to problem hai


//--------------------------------------------------------
type item = {
    name: string;
    price: number;
}
type Adress = {
    city: string;
    country: string;
}
type order = {
    id:string;
    item: item[];
    address: Adress;
}  

//-------------------------------------------------------

//update partial type

type animal = {
    name  : string,
    type  : string,
    age   : number
}

const updatedAnimal = (updates : Partial<animal>)=>{
    console.log(updates);
}
updatedAnimal({name: "Leo", age: 5}); // This is valid because the Partial type allows for any subset of the properties of the animal type to be provided.
updatedAnimal({type : "Lion"}); // This is also valid for the same reason.})
updatedAnimal({}); //empty object can be passed 

const requiredAnimal = (updates : Required<animal>)=>{
    console.log(updates);
}

// requiredAnimal({name: "Leo", age: 5}); // This will cause a TypeScript error because the type Required<animal> requires all properties of the animal type to be provided, and the type property is missing.
// requiredAnimal({type : "Lion"});    


type animal1 = {
    name  : "Parth",
    type  : "Human",
    age   : 20
}

type requiredanimal1 = Pick<animal1, "name" | "type">;   // This creates a new type that includes only the name and type properties from the animal type.

type requiredanimal2 = Omit<animal1, "age">;   // This creates a new type that includes all properties from the animal type except for the age property.    