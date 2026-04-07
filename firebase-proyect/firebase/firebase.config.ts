// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWmeEz6cAqNUaBMdjierhgeMzCdW70kR8",
  authDomain: "pruebabdfirebase-ea5e7.firebaseapp.com",
  projectId: "pruebabdfirebase-ea5e7",
  storageBucket: "pruebabdfirebase-ea5e7.firebasestorage.app",
  messagingSenderId: "933099223144",
  appId: "1:933099223144:web:717f318b930e5e861923dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{ db }