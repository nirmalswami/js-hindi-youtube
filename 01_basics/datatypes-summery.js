// primitive

// 7 : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);


// Reference (non-primitive)
// Array, Object, Functions

// array
const heros = ["spiderman", "saktiman", "batman"]

// object
let myFuntion = function(){
    //console.log("hello world");
}

//console.log(typeof anotherId);

// *******************************************

// stack (primitive), heap(non-primitive)

let officeName ="charumindworks"
let anothername ="charufashions"

console.log(anothername);
console.log(officeName);

let userOne = {
    email : "nirmal@gmail.com",
    upi : "nirmal@ybl"
}

let userTwo = userOne
userTwo.email ="swami@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);