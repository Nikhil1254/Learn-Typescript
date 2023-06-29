/**
 * 1. basics of classes.
 * 2. syntax and how to create classes
 */

class User {
    // should be declared first before using in constructor
    name: string
    age: number
    city: string = "Pune"

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    about(): string {
        return `${this.name} is ${this.age} years old.`
    }

    is18(): boolean {
        return this.age >= 18;
    }
}

let user1 = new User("Nikhil",23);
console.log(user1.city);
