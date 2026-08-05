// singleton- jab literals ki trh declare krte to singleton nhi bnta , constructor se singleton bnta h
 // onject.create


// object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Hitesh",
    age: 18,
    "full name":"Hitesh Choudhary",
    // mySym:"mykey1",
    [mySym]:"mykey1",
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"])
// console.log(JsUser."full name");   // error
console.log(JsUser["full name"]);

// console.log(JsUser.mySym)   // mykey1 - but its datatype is-
// console.log(typeof JsUser.mySym)   // string - but we wanted it symbol

console.log(JsUser.mySym)   
console.log(typeof JsUser.mySym)


JsUser.email="hitesg@chatgpt.com";
// Object.freeze(JsUser);   // now we can not change the object values

JsUser.email="ttta@gmail.com";
console.log(JsUser); 


JsUser.greeting= function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo= function(){
    console.log(`Hello JS User , ${this.name}`)
}

console.log(JsUser.greeting) // undefined

console.log(JsUser.greeting())  // [Function (anonymous)] 
console.log(JsUser.greetingTwo())