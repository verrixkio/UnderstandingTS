// const userName = 'Max';

// let age = 30;

// const add = function(a: number, b: number) {
//   return a + b;
// }

// const addArrow = (c: number, d: number) => {
//   return c + d;
// }

// // Add with rest params.
const simplestAdd = (...numbers: number[]) => {
  numbers.reduce((curResults, curValue) => {
    return curResults + curValue;
  }, 0);
};

const printOutput = (output: number | string) => console.log(output);

const hobbies = ['sports', 'cooking'];

//Extract all values of an array using the spread operater.
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies)

//Spread operator also exsits on objects!

const person = {
  name: 'Max',
  age: 30,
}

//The key value pairs are what are pulled out of the object: name: 'Max, age: 30

console.log({...person})

//Array Destructuring

const [hobby1, hobyy2] = hobbies;