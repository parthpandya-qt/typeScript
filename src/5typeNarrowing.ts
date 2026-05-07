function getChai(kind:string|number){
    if(typeof kind === "string"){ 
        console.log(`This is a ${kind} chai.`);
    }
    else if(typeof kind === "number"){
        console.log(`This chai costs ${kind} dollars.`);
    }
}


getChai("Masala");

function orderChai(size:"small"|"medium"|"large"|number){
    if(typeof size === "string"){
        console.log(`You ordered a ${size} chai.`);
    }
    else if(typeof size === "number"){
        console.log(`You ordered a chai of size ${size}.`);
    }

}


class chai1{
    serv(){
        console.log("Serving chai...");
    }
}
class coffee{
    serv(){
        console.log("Serving coffee...");
    }
}

function serveBeverage(beverage: chai1 | coffee){
    if(beverage instanceof chai1){
        beverage.serv();
    }
    else if(beverage instanceof coffee){
        beverage.serv();
    }
}   

type chaiOrder = {
    type:string;
    flavor: string;
    size: "small" | "medium" | "large";
}

function  isChaiOrder(order: any): order is chaiOrder{
    return order && typeof order.flavor === "string" && (order.size === "small" || order.size === "medium" || order.size === "large");
}

type masalaChai = {type: "masala"; flavor: string; size: "small" | "medium" | "large"};
type lemonChai = {type: "lemon"; flavor: string; size: "small" | "medium" | "large"};
type gingerChai = {type: "ginger"; flavor: string; size: "small" | "medium" | "large"};

type chai = masalaChai | lemonChai | gingerChai;

function makeChai(order: chai){
    switch(order.type){
        case "masala":
            console.log(`Making a ${order.size} ${order.flavor} masala chai.`);
            break;
        case "lemon":
            console.log(`Making a ${order.size} ${order.flavor} lemon chai.`);
            break;
        case "ginger":
            console.log(`Making a ${order.size} ${order.flavor} ginger chai.`);
            break;
    }
}

// function isString(arr:unknown): arr is string[]{
    
// }

type Book = {
    name:string;
}
let bookString = '{ "name": "The Great Gatsby" }';
let bookobject = JSON.parse(bookString) as Book;