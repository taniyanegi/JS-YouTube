// Immediately invoked function expressions - (IIFE)

(function chai(){
    //named iife
    console.log(`DB connected`)
})() ;

(function aurcode(){
    console.log(`DB connected Two`)
})()


( (name) => {
    // unnamed iife
    console.log(`DB connected Two`)
}) ('hitesh')


