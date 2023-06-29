/**
 * 1. same as type, will see difference between them later.
 * 2. we can easily add new properties into existing interface no need to touch old one
 * 3. It provides inheritace
 */

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string // defining function type
    startTrial(): string //this also way to define function,
    getCupon(cuponName: string, value: number): number
}

// reopening interface, adding extra properties
interface User {
    githubToken: string
}

// inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

let user1: Admin = {
    dbId: 22,
    email: "nikhil@gmail.com",
    userId: 124,
    startTrial: () => {
        return 'Trial started...';
    },
    getCupon: (cname: 'nikhil1254', off: 10) => {
        return off;
    },
    githubToken: "41",
    role: 'learner'
}


export { }