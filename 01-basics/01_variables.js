const accountId="144553"
let accountEmail="hitesh@google.com"
var accountPassword="jaipur"
accountCity="Jaipur"
let accountState

 // accountId=2  //not allowed
 console.log(accountId);

 accountEmail="hc@hc.com"
 accountPassword="21212121"
 accountCity="Bengluru"

 console.log(accountId);
 
 /*
 prefer not to use var
 because of the issue in block scope and functional scope
 */

 console.table([accountId,accountEmail,accountPassword,accountCity])

 console.log(accountState)
