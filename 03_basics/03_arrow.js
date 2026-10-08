const user={
    username: "hitesh" ,
    price: 999 ,

   welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`)
    console.log(this)  // print current context of whole function
   }
}

// user.welcomeMessage() 
// user.username="Sam"
// user.welcomeMessage()

// console.log(this)  // {} - empty 


// function chai(){
//     let username="hitesh"
//     console.log(this.username) // undefined- works insides objects only not in functions  
// }

// chai()

// const chai=function(){
//     let username="hitesh"
//    console.log(this.username)  // undefined
// }





// Arrow functions
 const chai= () => {
   let username="hitesh"
   console.log(this) // {}
   console.log(this.username) // undefined
}
 chai()


//  const addTwo=(num1,num2) => {
//     return num1+num2
//  }

//  console.log(addTwo(3,4))


// implicit return
// const addTwo=(num1,num2) => num1+num2

// console.log(addTwo(3,4))


// object return

const addTwo=(num1,num2) => ({username:"hitesh"})
console.log(addTwo(3,4))



