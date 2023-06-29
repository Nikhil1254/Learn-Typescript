type User = {
    name: string,
    email: string,
    isPaid: boolean,
    isActive: boolean
}

function createUser(user: User): User {
    return user;
}

createUser({ name: "Nikhil", email: "nik@gmail.com", isPaid: false, isActive: true });


export { }