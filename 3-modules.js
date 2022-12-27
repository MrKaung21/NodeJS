// Modules
// CommonJS, every file in node is module(by default)

const { john, peter } = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavour.js')
require('./7-mind-genrade')

console.log(data.singlePerson.name);
sayHi(john)
