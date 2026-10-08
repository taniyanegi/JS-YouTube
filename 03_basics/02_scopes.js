// let a=10
// const b=20 
// var c=30

// var c=300

let a=300
 
if(true){
let a=10
const b=20 
//  console.log("Inner: ",a)
// var c=30
}

// console.log(a);   //error a not defined
// console.log(b);   // error b not available
// console.log(c);   // 30

// console.log(a); // 300


//example

function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        // console.log(username)
    }
    // console.log(website)    //error= scope -website is not defined

    two()
}
// one()


if(true){
    const username="hitesh"

    if(username=="hitesh"){
        const website=" youtube"
        // console.log(username+website)
    }
    // console.log(website)   // error - not in scope
}

//  console.log(username)  // error - not in  scope
 

// +++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))  //no error- can call function before declaration

function addone(num){
    return num+1;
}

 
// addTwo(5)   // error - using function before declaration
const addTwo=function(num){
    return num+2
}

