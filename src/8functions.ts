function makechai(name:string,quantity:number){
    console.log(`Making ${quantity} cups of ${name} chai.`);
}

makechai("masala", 2);

function addition(num1:number,num2:number): number{
    return num1 + num2;
}
console.log(addition(5, 10));



function makeOrder(order:string){
    if(!order) return null
    console.log(`Order received: ${order}`);
}


function optionalOrder(order?: string){
    if(order){
        console.log(`Order received: ${order}`);
    }
    else{
        console.log("No order received.");
    }
}


function makeCoffee(order:{type: string; size: string}){
    console.log(`Making a ${order.size} ${order.type} coffee.`);
}
makeCoffee({type: "espresso", size: "small"});



function voidfunction(): void{
    console.log("This function does not return anything.");
}











export {};