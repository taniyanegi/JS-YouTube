let score="33abc"

console.log(typeof score) //string
console.log(typeof(score)) //string

let valueInNumber = Number(score)
console.log(typeof score)

console.log(typeof valueInNumber) //number

console.log(valueInNumber) //NaN => not a number

// different conversion after using  console.log(typeof score) this
// "33" => 33
// "33abc" => NaN
// "true" => 1 ,false = 0
// null => 0
// undefined = NaN

let isLoggedIn = 1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0=> false
// "" => false
// "hitesh" => true

let someNumber=33

let stringNumber= String(someNumber)
console.log(typeof stringNumber)


// ***************** operations *******************

 let val=3;
 let negval=-val;

 console.log(negval);

 /* bsic operations
 console.log(1+1);
 console.log(2-1);
 console.log(2*2);
 console.log(3**3);
 console.log(10%7);
     */

 // some important output based operations
 console.log("1"+1);
 console.log(1+"2");
 console.log("1"+1+2);
 console.log(2+1+"1");


 console.log(true);
 console.log(+true);
//  console.log(true+);  // error


// assignment
let num1,num2,num3;
num1=num2=num3=2+2;

// prefix increamnet ,postfix increament

let gamecounter=100;
console.log(gamecounter++);
console.log(++gamecounter);
