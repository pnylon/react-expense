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

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, db as default };


// // db.ref('expenses').on('child_removed', (snapshot) => {
// //     console.log(snapshot.key, snapshot.val());
// // });

// // db.ref('expenses').on('child_changed', (snapshot) => {
// //     console.log(snapshot.key, snapshot.val());
// // });

// // db.ref('expenses').on('child_added', (snapshot) => {
// //     console.log(snapshot.key, snapshot.val());
// // });

// // db.ref('expenses').once('value').then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // }).catch((error) => {
// //     console.log('Error: ', error)
// // });

// // db.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // }, (error) => {
// //     console.log('Error: ', error)
// // });

// // db.ref('expenses').push({
// //     description: 'Spoons',
// //     note: 'For soupy stuff',
// //     amount: '520',
// //     createdAt: '13450000'
// // });

// // const onValueChange = db.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (error) => {
// //     console.log('Failed: ', error);
// // });

// // setTimeout(() => {
// //     db.ref('age').set(696);
// // }, 3500);

// // setTimeout(() => {
// //     db.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     db.ref('age').set(697);
// // }, 10500);

// /* ========================================================== */
// /* ========================================================== */
// // db.ref().once('value').then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// // }).catch((error) => {
// //     console.log('Failed: ', error);
// // });

// // db.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// // }, (error) => {
// //     console.log('Failed: ', error);
// // });

// /* ========================================================== */
// /* ========================================================== */

// // db.ref().once('value').then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// // }).catch((error) => {
// //     console.log('Failed: ', error);
// // });

// // db.ref().set({
// //     name: 'Jaco',
// //     age: 693,
// //     stresLevel: 5,
// //     job: {
// //         title :'Software Bowl',
// //         company: 'Poodle'
// //     },
// //     location: {
// //         city: 'Goobeehwueila',
// //         country: 'Fimn'
// //     }
// // }).then(() => {
// //     console.log('Data saved')
// // }).catch((error) => {
// //     console.log('Failed saving data: ', error);
// // });

// // db.ref('age').set(4);
// // db.ref('location/city').set('numby');

// // db.ref('attributes').set({
// //     height: 8, 
// //     weight: 40
// // }).then(() => {
// //     console.log('Data saved...')
// // }).catch((error) => {
// //     console.log('Falied: ', error);
// // });

// // db.ref('isStrange').set(null);

// // db.ref('isStrange').remove().then(() => {
// //     console.log('Remove complete');   
// // }).catch((error) => {
// //     console.log('Remove failed', error);
// // });

// // db.ref().update({
// //     stressLevel: 11,
// //     'job/company': 'Amahog',
// //     'job/location': 'Seaturtle'
// // });
