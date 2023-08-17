const validator = require('validator')

const test1 = validator.isEmail('test@test.com') // true
const test2 = validator.isEmail('abcDE123') // false

console.log(test1, test2)