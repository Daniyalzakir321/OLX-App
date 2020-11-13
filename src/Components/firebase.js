  import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyBER515nd6uoaHb-sJyX63fnavkzoB86tQ",
    authDomain: "olx-web-app-assignment-14.firebaseapp.com",
    databaseURL: "https://olx-web-app-assignment-14.firebaseio.com",
    projectId: "olx-web-app-assignment-14",
    storageBucket: "olx-web-app-assignment-14.appspot.com",
    messagingSenderId: "1008201042987",
    appId: "1:1008201042987:web:d41e3cfaa453e3fa95ae6e",
    measurementId: "G-DJMBVZX1PV"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };




// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

//   var firebaseConfig = {
//     apiKey: "AIzaSyBER515nd6uoaHb-sJyX63fnavkzoB86tQ",
//     authDomain: "olx-web-app-assignment-14.firebaseapp.com",
//     databaseURL: "https://olx-web-app-assignment-14.firebaseio.com",
//     projectId: "olx-web-app-assignment-14",
//     storageBucket: "olx-web-app-assignment-14.appspot.com",
//     messagingSenderId: "1008201042987",
//     appId: "1:1008201042987:web:d41e3cfaa453e3fa95ae6e",
//     measurementId: "G-DJMBVZX1PV"
//   };
// //  var FIREBASE= firebase.initializeApp(firebaseConfig);

//   export default firebase.initializeApp(firebaseConfig); 


