const accountId = 144553
let accountEmail = "nirmal@gmail.com"
var accountPassword ="nirmal"
accountCity = "jaipur"
let accountState

// accountId = 2 not allowed

/*
not to use var 
because of issue in  block scope and function scop 
*/
accountEmail ="swami@gmail.com"
accountPassword="swami"
accountCity="rajasthan"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);