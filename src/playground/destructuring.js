// const person = {
//     name: 'Andries',
//     age: 27,
//     location: {
//         city: 'Cape Town',
//         temp: 35
//     }
// };

// const {name: firstname = 'Anonymous', age} = person;

// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} degrees Celsius in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`${publisherName}`);

// const address = ['168 The Jade, WQ Blvd', 'Somerset West', 'Western Cape', '7130'];

// const [, city, province] = address;

// console.log(`You are in ${city}, ${province}.`);

const item = ['Coffee', 'R15.00', 'R25.00', 'R32.00'];

const [product, ,mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);