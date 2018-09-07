import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA7Tt-pYM4PXvAol197jf_aI9gsGg1OMds",
    authDomain: "expensify-56f2e.firebaseapp.com",
    databaseURL: "https://expensify-56f2e.firebaseio.com",
    projectId: "expensify-56f2e",
    storageBucket: "expensify-56f2e.appspot.com",
    messagingSenderId: "152958035099"
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

/* database.ref().set({
    name: 'Kamil',
    age: 22,
    isSingle: false,
    location: {
        city: 'Daleko',
        country: 'United States'
    },
    desc: 'none'
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
}); */

/* var adaRef = firebase.database().ref('isSingle');
adaRef.remove()
  .then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  }); */