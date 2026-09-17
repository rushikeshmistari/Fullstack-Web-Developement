import { generateName } from 'sillyname';
import superheroes from 'superheroes';

var sillyName = generateName();
console.log(`My silly name is: ${sillyName}`);

var name = superheroes.random();
console.log(`My superhero name is: ${name}`);;
