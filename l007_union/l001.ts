// combination of more than 2 data types
/*
    - Try to use union as precise as possible. Make our code more stricker     thats the whole purpose of typesscript.
    - Try to avoid using any, if we are disabling type checking then what's the point of using TS
*/
let score: string | number = 33;

score = 44;
score = "55";


type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let nikhil: User | Admin = {
    name: "Nikhil",
    id: 17
}

nikhil = {
    username: "nik1254",
    id: 532
}


// how to treat multiple types and operations
// we need to have strict checks for operations
function getDbId(id: string | number) {
    if (typeof id === "string")
        id.toLowerCase();
    else
        id += 2;
    console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("3");


// array 
// I want array with numbers and string both
const data: number[] = [1, 2, 3] // only numbers
const data1: string[] = ["1", "2", "3"] // only strings
const data2: number[] | string[] = [1, 2, 3] // either array of numbers or strings mixed not allowed
const data3: (string | number)[] = [1, 2, "3"];


// strict values - literal type
let PI: 3.14;
PI = 3.14;

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "window";
