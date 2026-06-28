const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)) ;

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000;

console.log(hundreds.toLocaleString());         // 1,000,000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000

// ++++++++++++++++++++++ Maths ++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  //4
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)) //5
console.log(Math.min(99,3,4,6,7,8,4)) //3
console.log(Math.max(99,3,4,6,7,8,4)) //99

console.log(Math.random())  // output will be always between 0 to 1
console.log(Math.random()*10+1)  // shifting to get values
console.log(Math.floor(Math.random()*10+1)) // gives floor values (between 1 to 9)


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)   // to get the values between  given range(10-20) min to max - and min value is 10 

