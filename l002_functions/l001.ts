function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string): string {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

// default parameters
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

function getValue(num: number): boolean | string {
    if (num > 5)
        return true;
    else
        return "200 OK";
}

// arrow function 
let greet = (name : string):string => `Hello, ${name} !!!`;

console.log(addTwo(5));
console.log(getUpper("nikhil"));
signUpUser("Nikhil", 'np0129999@gmail.com', false);
loginUser('nikhil', 'np0129999@gmail.com');
greet("Nikhil");
export { };