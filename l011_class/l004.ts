/**
 * 1. Protected access modifier - used in inheritance
 * 2. private can't be accessed inside child
 * 3. to access something which is not accessible outside class but can be accessed in child - protected
 * 4. protected - inside class and in any class which inherits it.
 */

class User {

    readonly city: string = "Jalgaon";
    protected courseCount: number = 1;

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

class SubUser extends User{
    isFamily: boolean = true;
     
    changeCourseCount(){
        this.courseCount = 4;
    }
}

export {}