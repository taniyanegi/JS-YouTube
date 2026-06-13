/* basics
console.log(2>1);
console.log(2>=1);
console.log(2<1);    
console.log(2==1);
console.log(2!=1);          
   */

console.log("2">1);
console.log("02">1);  // avoid these type of conversions as tehy automatcally convert string to number so do not use them 

console.log(null>0);
console.log(null==0);
console.log(null>=0);
 // the reson is that equality(==) and comparison(<,>,<=,>=) work differently conparison convert null to number treating it as 0 that is why (null>=0 is true) and (null>0 is false)

 console.log(undefined==0);
 console.log(undefined>0);
 console.log(undefined<0);   
 console.log(undefined>=0);
 console.log(undefined<=0);

 // strict check (===)- check values and datatype also
    console.log("2"===2);
    console.log(10==="10");