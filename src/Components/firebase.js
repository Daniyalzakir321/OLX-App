import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import 'firebase/database';
import 'firebase/analytics'


const fire=  firebase.initializeApp({
  apiKey: "******************************",
  authDomain: "******************************",
  databaseURL: "******************************",
  projectId: "******************************",
  storageBucket: "******************************",
  messagingSenderId: "******************************",
  appId: "******************************",
  measurementId: "******************************"
  })
const db= fire.firestore();
// const db= fire.database();

// HERE THE FIRE IS EXPORTED TO LOGIN-SIGNUP.JS
export {fire , db};