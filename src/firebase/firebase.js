import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snaphshot) => {
//     console.log('child_removed', snaphshot.key, snaphshot.val());
// }, (e) => {
//     console.log('Error retrieving data after child_removed', e);
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snaphshot) => {
//     console.log('child_changed', snaphshot.key, snaphshot.val());
// }, (e) => {
//     console.log('Error retrieving data after child_changed', e)
// });

// // child_added
// database.ref('expenses').on('child_added', (snaphshot) => {
//     console.log('child_added', snaphshot.key, snaphshot.val());
// }, (e) => {
//     console.log('Error retrieving data after child_added', e);
// });

// database.ref('expenses').push({
//     description: 'Jantar', 
//     note: 'Comemoração de aniversário',
//     amount: 21520,
//     createdAt: 141332
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// expenses.map(({ description, note, amount, createdAt }) => {
//     database.ref('expenses').push({ description, note, amount, createdAt });
// });

// database.ref().on('value', (snapshot) => {
    
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// setTimeout(() => {
//     database.ref('name').set('João');
// }, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// setTimeout(() => {
//     database.ref('age').set(37);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data', e);
// });

// database.ref().set({
//     name: 'Fabio Arazaki',
//     age: 35,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: "Curitiba",
//         country: "Brasil"
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed. ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data is updated!');
// }).catch((e) => {
//     console.log('Update failed. ', e);
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was removed!');
// })
// .catch((e) => {
//     console.log('Did not remove data', e)
// });

