const user = {
    name: "Nikhil",
    email: "np0129999@gmail.com",
    isActive: true
}

// function accepting object
// object destructuring
function createUser({name,isPaid}:{ isPaid: boolean, name : string }):void {
    console.log(isPaid);
    console.log(name);
}


// function returning object
function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 };
}

createUser({name : "Nikhil", isPaid : true})


// createUser({ name: "Nikhil", isPaid: false, email: "np0129999@gmail.com" }); -  // will get an error for extra fields

// will not get any error
// weird behavior of TS about objects
let user1 = { name: "nikhil", email: "np012999@gmail.com", isPaid: false }
createUser(user1);


export { }