import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import 'firebase/database';
import 'firebase/analytics'
import "firebase/storage";

const fire=  firebase.initializeApp({
  apiKey: "AIzaSyBER515nd6uoaHb-sJyX63fnavkzoB86tQ",
  authDomain: "olx-web-app-assignment-14.firebaseapp.com",
  databaseURL: "https://olx-web-app-assignment-14.firebaseio.com",
  projectId: "olx-web-app-assignment-14",
  storageBucket: "gs://olx-web-app-assignment-14.appspot.com",
  messagingSenderId: "1008201042987",
  appId: "1:1008201042987:web:d41e3cfaa453e3fa95ae6e",
  measurementId: "G-DJMBVZX1PV"
  })
const db= fire.firestore();
const storage = fire.storage();
const auth = fire.auth();
// const db= fire.database();

// HERE THE FIRE IS EXPORTED TO LOGIN-SIGNUP.JS
export {fire , db, storage, auth };