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

// rest operator

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(200,100,400))

// to solve this we use rest operator

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500,2000))   // [200,400,500,2000]


const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399 
})



// for arrays
const myNewArray=[200,100,500,1000]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,800,1000,900]))