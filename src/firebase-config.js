// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkn1RbFDnKcFxM1COQ_LgQYI66Mz5syuI",
  authDomain: "blogofy-4d473.firebaseapp.com",
  projectId: "blogofy-4d473",
  storageBucket: "blogofy-4d473.appspot.com",
  messagingSenderId: "523973059643",
  appId: "1:523973059643:web:fb0e24aaaab5946862681e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();