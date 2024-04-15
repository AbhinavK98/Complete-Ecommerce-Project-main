// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqv0xb1-7R4gK_6aA4v7iOoMcpuYV6DTs",
  authDomain: "shopkart-ca16a.firebaseapp.com",
  projectId: "shopkart-ca16a",
  storageBucket: "shopkart-ca16a.appspot.com",
  messagingSenderId: "796274337958",
  appId: "1:796274337958:web:6a050724a0343924d5ec67",
  measurementId: "G-2QP4PP645H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;