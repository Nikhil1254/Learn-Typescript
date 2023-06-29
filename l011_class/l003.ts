/** #Access modifiers 
 * 1. getters and setters in ts 
 * 2. we can set values of private using setters if we want to set it's value
 * 3. we can't call getter and setter as function it can be accessed as property
 * 4. we can have private methods as well
 * 5. we can't provide return type to setters
 */

class User {

    readonly city: string = "Jalgaon";
    private courseCount: number = 1;

    constructor(private name: string, private age: number, private email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public about(): string {
        return `${this.name} is ${this.age} years old.`;
    }

    // getter
    get getEmail(): string {
        return this.email;
    }

    //setter
    set setCourseCount(courseCount: number) {
        this.courseCount = courseCount;
    }

    private deleteToken(): void {
        console.log('Token deleted.')
    }
}


let user1 = new User("Nikhil", 23, "nik@gmail.com");
console.log(user1.getEmail);
console.log(user1);

user1.setCourseCount = 10;
console.log(user1);






export { }