type order = {
    type: "chai" | "coffee";
    flavor: string;
    size: "small" | "medium" | "large";
}

function makeChai(order: order){
    if(order.type === "chai"){
        console.log(`Making a ${order.size} ${order.flavor} chai.`);
    }
    else if(order.type === "coffee"){
        console.log(`Making a ${order.size} ${order.flavor} coffee.`);
    }
}

function servChai(order: order){
    if(order.type === "chai"){
        console.log(`Serving a ${order.size} ${order.flavor} chai.`);
    }
    else if(order.type === "coffee"){
        console.log(`Serving a ${order.size} ${order.flavor} coffee.`);
    }
}

interface cupSize{
    Size: "small" | "medium" | "large";
}

class Chai implements cupSize{
    Size: "small"|"large"="large";
}

type teaType = "masala" | "ginger" | "cardamom";   //this is called literal type 

function orderChai(t:teaType){
    console.log(`Ordering a ${t} chai.`);
}


type BaseChai = { teaLeaves:Number}
type Extra = {Masala:Number}
type lemontea = BaseChai & Extra; // This is an intersection type that combines the properties of BaseChai and Extra.

const cup :lemontea = {
    teaLeaves: 1,
    Masala: 2
}

type userName = {
    name: string;
    roll?: number; // This is an optional property, meaning it may or may not be present in objects of type userName.
}
type userAge = {
    age: number;
}
type userInfo = userName & userAge; // This is an intersection type that combines the properties of userName and userAge.

const user1 : userInfo = {
    name: "Alice",
    age: 30
};

user1.name = "Parth" // This is valid because the name property is not read-only. It can be modified after the object is created.
type userinfo = {
    readonly name: string;
    age: number;
}


const user2 : userinfo = {
    name: "Bob",
    age: 25
};

// user2.name = "Charlie"; // This will cause an error because the name property is read-only and cannot be modified after the object is created.   


// type cup = {
//     name: string;
// }
// let smallCup: cup = { name: "Small Cup", material: "ceramic" }; // This will cause an error because the cup type does not have a material property. The object literal is not compatible with the cup type due to the extra property.    
// smallCup.name = "Medium Cup"; // This is valid because the name property is not read-only. It can be modified after the object is created.