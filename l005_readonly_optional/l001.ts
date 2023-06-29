type User = {
    readonly _id : string //read only not able to modify it later
    name : string,
    email : string,
    isActive : boolean,
    credDetails?: number //optional
}

type cardNumber = {
    cardnumber : string
}

type cardDate = {
    carddate : string
}

// combining multiple types using &
type cardDetails = cardNumber & cardDate & {
    cvv : number
};

let myUser: User = {
    _id : "1345",
    name : "Nikhil",
    email : "nik@gmail.com",
    isActive : false
}

myUser.email = 'np@gmail.com';
// myUser._id = "1324"; //will give error