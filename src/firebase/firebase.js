// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCetIgqZRXEmeSpTpeg5TOcygd-XW-h2oU",
  authDomain: "mail-box-client-948c9.firebaseapp.com",
  projectId: "mail-box-client-948c9",
  storageBucket: "mail-box-client-948c9.appspot.com",
  messagingSenderId: "351406871412",
  appId: "1:351406871412:web:8560992b9ddd6809c5d221",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
