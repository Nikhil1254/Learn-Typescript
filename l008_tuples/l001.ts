/**
 * 1. More stricter version of array => fixed size and fixed data type at particular index
 * 2. Order is strictly followed
 * 3. There is one flaw with it using array methods we can manipulate tuples 
 * we can use all methods push,shift, unshift and that mess up everything.
 */

// let user: (number|string|boolean)[] = [24,true,"np"]; // no strict order followed
let user: [string, number, boolean] = ["np", 23, true]; // follows strict order

let rgb: [red: number, green: number, blue: number] = [120, 124, 240];

// flaws with tuples
user.push("Nikhil");
user.push(false);
user.unshift(42568);

console.log(user);

export {};