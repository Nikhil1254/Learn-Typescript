/**
 * 1. access modifiers - public, private
 * 2. private things can be only accessed within the class not outside of it
 * 3. public can be used anywhere , by default it's public if we don't specify
 * 4. shortcut syntax for the same
 */

// class User {
//     private email: string
//     private name: string
//     age: number

//     city : string = "Jalgaon"

//     constructor(name: string, age: number, email: string) {
//         this.name = name;
//         this.age = age;
//         this.email = email
//     }

//     about(): string {
//         return `${this.name} is ${this.age} years old.`
//     }

//     is18(): boolean {
//         return this.age >= 18;
//     }
// }

//shortcut to above code
class User {

    readonly city:string = "Jalgaon";

    constructor(private name: string, private age: number, private email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public about(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}

let user1 = new User("Nikhil", 24, "nik@gmail.com");
console.log(user1.city);





export { }