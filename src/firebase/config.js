import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCIRnY6u1QwEglNJ_RRSjZYCeymYYQR7UM",
    authDomain: "firegram-70d18.firebaseapp.com",
    projectId: "firegram-70d18",
    storageBucket: "firegram-70d18.appspot.com",
    messagingSenderId: "87635645138",
    appId: "1:87635645138:web:e8f03169231633b3e7930b",
    measurementId: "G-DJDZJBFNXK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};