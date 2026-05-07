class chai{
    flavour:string;
    price:number
    constructor(flavour:string, price:number){
        this.flavour = flavour;
        this.price = price;
    }
}

const chai1 = new chai("masala", 50);
console.log(chai1.flavour);

//-----------------------------------------------------------
//access modifiers

class coffee{
    public  flavour:string = "espresso" // can be accessed from anywhere
    private price:number = 100
    private secretIngredient:string = "vanilla" // can only be accessed within the class
    reveal(){
        console.log(`The secret ingredient is ${this.secretIngredient}.`);
    }
    protected shopeName :string = "Coffee House" // can be accessed within the class and its subclasses
}

class  branch extends coffee{
    displayShopName(){
        console.log(`The shop name is ${this.shopeName}.`);
    }
}

const coffee1 = new coffee();
console.log(coffee1.flavour);



class walet{
    #balance = 100; // private field using # syntax

    getBalance(){
        return this.#balance;
    }
}

const w = new walet();
console.log(w.getBalance());


class cup{
    readonly material: string; // This property can only be assigned once and cannot be changed afterwards
    constructor(material: string){
        this.material = material;
    }
}

class modernChai{
    private _sugarLevel: number = 0; // This is a private property that can only be accessed within the class

    get sugarLevel(): number{  //getter 
        return this._sugarLevel; // This is a getter method that allows read access to the private _sugarLevel property
    }
    set sugarLevel(level: number){  //setter
        if(level < 0 || level > 100){
            console.log("Sugar level must be between 0 and 100.");
        }
        else{
            this._sugarLevel = level; // This is a setter method that allows write access to the private _sugarLevel property with validation
        }
}
}

//---------------------------------------------------------
//STATIC MEMBERS

class ekChai{
    static shopName: string = "Ek Chai"; // This is a static property that belongs to the class itself, not to any instance of the class
    constructor(public flavour: string){
        this.flavour = flavour;
    }
}
console.log(ekChai.shopName); // This is how you access a static property using the class name, without needing to create an instance of the class.

//It is used in classes to create members that belong to the class itself, not to instances (objects).


abstract class student{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

//--------------------------------------------------------------

//Class composition is a design technique where one class contains objects of another class instead of inheriting from it
//“Has-a” relationship instead of “is-a” relationship.
class Heater {
    heat(){

    }
}
class chaiMaker{
    constructor(private heater:Heater){}
    make(){
        this.heater.heat(); // This is how the chaiMaker class can use the functionality of the Heater class through composition.
    }
}

