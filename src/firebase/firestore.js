// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// personal account
// const firebaseConfig = {
//   apiKey: "AIzaSyB01bDof7AfU4pqZIrTuMZOrTY-i2bVB5I",
//   authDomain: "user-database-01.firebaseapp.com",
//   projectId: "user-database-01",
//   storageBucket: "user-database-01.appspot.com",
//   messagingSenderId: "387709901976",
//   appId: "1:387709901976:web:d0335c656909d2a9d004ed"
// };

// vppcoe account

const firebaseConfig = {
    apiKey: "AIzaSyDnLHJjDCjNzRmilkGgs_oEVQ0OT1fixdw",
    authDomain: "user-data-storage-01.firebaseapp.com",
    projectId: "user-data-storage-01",
    storageBucket: "user-data-storage-01.appspot.com",
    messagingSenderId: "407170226491",
    appId: "1:407170226491:web:3feb72a03be8c99c30ff1e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
