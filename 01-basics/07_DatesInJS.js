// Dates

let myDate=new Date()

console.log(myDate);  // 2026-07-13T17:49:40.158Z
console.log(myDate.toString()); //Mon Jul 13 2026 17:49:40 GMT+0000 (Coordinated Universal Time)

//more methods
console.log(myDate.toDateString());  //Mon Jul 13 2026
console.log(myDate.toISOString());   // 2026-07-13T17:53:20.155Z 
console.log(myDate.toJSON());    // 2026-07-13T17:53:20.155Z
console.log(myDate.toLocaleString());  // 7/13/2026, 5:53:20 PM
console.log(myDate.toLocaleTimeString()); //5:53:20 PM
console.log(myDate.toTimeString());   //17:53:20 GMT+0000 (Coordinated Universal Time)


console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate=new Date(2023,0,23,5,3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate=new Date("2023-01-14");   // yy-dd-mm
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date("02-14-2023");   //mm-dd-yy
console.log(myCreatedDate.toLocaleString());

// timestamps
let myTimeStamp=Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // convert milliseconds into seconds

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()) ;

// `${newDate.getDay} and the time ${newDate.getTime()}`

newDate.toLocaleString('default',{
           weekday:"long",
           timeZone:'40.158Z'
})