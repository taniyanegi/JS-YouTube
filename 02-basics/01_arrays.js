// arrays
 const myArr=[0,1,2,3,4,5] 

 console.log(myArr[0]); 

 // shallow copy
 const student1 = {
  name: "Taniya",
  marks: {
    math: 90
  }
};

// *************** Shallow copy **************
const student2 = student1;

console.log(student1);
console.log(student2);

// Change nested object
student2.marks.math = 100;

console.log("\nAfter modifying student2:");

console.log(student1.marks.math); // 100
console.log(student2.marks.math); // 100


// ************* deep copy *********
const student3 = {
  name: "Taniya",
  marks: {
    math: 90
  }
};

// Deep copy
   // using JSON =>const copy = JSON.parse(JSON.stringify(original));
  // modern way of creating deep copy => const copy = structuredClone(original);
const student4 = structuredClone(student3);

console.log(student3);
console.log(student4);

// Change nested object
student4.marks.math = 100;

console.log("\nAfter modifying student4:");

console.log(student3.marks.math); // 90
console.log(student4.marks.math); // 100



// MORE ABOUT ARRAYS

const heroes=["shaktiman","naagraj"];
const myArr2=new Array(1,2,3,4);

console.log(myArr2[1]);


// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

myArr.unshift(9)
console.log(myArr);    //[9, 0, 1, 2, 3, 4, 5]

myArr.shift();
console.log(myArr);    // [0,1,2,3,4,5]

console.log(myArr.includes(9));  // false
console.log(myArr.indexOf(19)) // -1
console.log(myArr.indexOf(1)); // 1

const newArr=myArr.join()
console.log(myArr);
console.log(newArr);

// slice,splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);  //[0,4,5]  after applying splice spliced part gets removed from original array
console.log(myn2);