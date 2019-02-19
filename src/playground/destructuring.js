//
// Object Destructuring
//

// const person = {
//     name: 'Fabio',
//     age: 34,
//     location: {
//         city: 'Curitiba',
//         temp: 30
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature){
//     console.log(`It´s ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

//
// Array Destrutctruring
//

// const address = ['Avenida Fredolin Wolf, 799','Curitiba','PR','82115-000'];
// const [street, city, state = 'SP', zip] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);