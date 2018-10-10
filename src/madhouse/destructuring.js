// Object destructuring
// console.log('object destructuring');

// const person = {
//     firstName: undefined,
//     age: 28,
//     location: {
//         city: 'Jackson',
//         temperature: 69
//     }
// }

// //const name = person.name;
// //const age = person.age;
// const { firstName: name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);

// const { city, temperature: temp } = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published'  } = book.publisher;
// console.log(publisherName); // Penguin or Self-Published

// Array destructuring
console.log('array destructuring');

const address1 = ['1234 Blobo Drive', 'Sandbar', 'California', '93344'];
const address2 = ['1234 Blobo Drive', 'Sandbar', undefined, '93344'];
const [street1, city1, state1, zip1] = address1;
const [, , state2 = 'California'] = address2;

console.log(`You are at ${street1} ${city1}`);
console.log(`You are in ${state2}`);

const teaHot = ['Tea (hot)', '$2.00', '$2.50', '$2.75',];
console.log(`A medium ${teaHot[0]} costs ${teaHot[2]}`);

const coffeeHot = ['Coffee (hot)', '$2.20', '$2.70', '$2.95',];
const [hotCoffee, small, medium, large] = coffeeHot;
console.log(`A medium ${hotCoffee} costs ${coffeeHot[2]}`);
console.log(`A large ${hotCoffee} costs ${coffeeHot[3]}`);

