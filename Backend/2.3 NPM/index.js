var generateName = require('sillyname');
var sillyName = generateName();
console.log(`My silly name is: ${sillyName}`);

var name = require("superheroes");
var heroname = name.random();
console.log(`My superhero name is: ${heroname} !`);