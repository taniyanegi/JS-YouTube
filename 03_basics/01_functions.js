function saymyName(){
    console.log("h")
    console.log("i")
}

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")  // -> 34
// addTwoNumbers(3,null)  

// const result=addTwoNumbers(3,5)

// console.log("Result: " , result); // undefined 


 function addTwoNumbers(number1,number2){
           let res=number1+number2
           return res;
           console.log("hi")  // unreachable code
  }

  const result=addTwoNumbers(3,5)
  console.log("Result: ",result)

// one more example
                           // default 
function loginUserMessage(username="Sam"){
    if(username===undefined){  // if(!username)
        console.log("please enter a username")
        return
    }
      return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) 
console.log(loginUserMessage()) // undefined