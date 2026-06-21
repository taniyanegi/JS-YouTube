// primitive
// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt 

    const score=100
    const scoreValue=100.3

    const isLoggedIn=false
    const outsideTemp=null
    let userEmail;

    const id=Symbol('123')
    const anotherId=Symbol('123')

    console.log(id==anotherId)

    const bigNumber=3456778939843000n //BIgInt

// Referemce (Non-Primitive)
// Array , Objects , Functions

const heroes=["shaktiman","neegraj","doga"]

let myObj={
    name: "hitesh",
    age:22,
}

const myFunction = function(){
     console.log("hello world");    
} 

console.log(typeof myFunction);   // Function
console.log(typeof heroes)  ;     // object
console.log(typeof outsideTemp) ; // object
console.log(typeof bigNumber) ;   // bigint
console.log(typeof anotherId) ;   // symbol



