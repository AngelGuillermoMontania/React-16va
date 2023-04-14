// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfuV1jibfEV3lqh1vJInVukI_lQNJyGos",
  authDomain: "ecommerce-16va.firebaseapp.com",
  projectId: "ecommerce-16va",
  storageBucket: "ecommerce-16va.appspot.com",
  messagingSenderId: "563346415287",
  appId: "1:563346415287:web:278da18ec197d39b23f732",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
