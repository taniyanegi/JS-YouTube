const name="hitesh"
const repoCount=50

// console.log(name+" "+repoCount)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName=new String('hitesh-hc-hec-pc')

 console.log(gameName[0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);  // length of string = 8
 console.log(gameName.toUpperCase());  // HITESHCH
 console.log(gameName.charAt(2));   // t
 console.log(gameName.indexOf('t'))  // 2


 // more methods
const newString = gameName.substring(0,4)
console.log(newString);  // hite

//slice
const anotherString= gameName.slice(-8,4)
console.log(anotherString);    // ite

//trim
const newStringOne="            hitesh          "
console.log(newStringOne)
console.log(newStringOne.trim())

//replace
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))


console.log(url.includes('hitesh'))
console.log(url.includes('mukesh'))

//split
console.log(gameName.split('-'))







