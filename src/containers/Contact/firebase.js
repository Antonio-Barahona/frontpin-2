import firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCqXzJcqEkyNlpaPyv-lpz71ZNDhTNoLZ4",
    authDomain: "landing-8aac7.firebaseapp.com",
    projectId: "landing-8aac7",
    storageBucket: "landing-8aac7.appspot.com",
    messagingSenderId: "607292713567",
    appId: "1:607292713567:web:93cdedbd4a146602c389ea",
    measurementId: "G-V06S7G6TE9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  firebase.analytics();

// const firebaseApp = firebase.initializeApp(firebaseConfig)

const google = new firebase.auth.GoogleAuthProvider()
//const db = firebase.firestore()

export { auth, google }
//export default db
