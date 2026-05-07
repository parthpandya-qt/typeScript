//Generics are a feature in programming that allow you to write code that can work with different data types while still keeping type safety.

function wrapInArray<T>(value: T): T[] {
    return [value];
}

wrapInArray(5); // This will return an array of numbers: [5]
wrapInArray("Hello"); // This will return an array of strings: ["Hello"]
wrapInArray({flavour:"masala"}); // This will return an array of objects: [{flavour:"masala"}]



function pair<T,U>(first:T,second:U):[T,U]{
    return [first,second];
}

pair("Parth", 25); // This will return a tuple: ["Parth", 25]
pair(10, true);


//------------------Generic Constraints----------------------------


interface Box<T>{
    content: T;
}

const numberBox:Box<number> = {content: 123};
const stringBox:Box<string> = {content: "Hello"};



//-------------------Generic Constraints----------------------------
interface ApiResponce<T>{
    status: number;
    data: T;
}

const res: ApiResponce<{flavour: string}> = {
    status: 200,
    data: {flavour: "masala"}
}

