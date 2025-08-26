// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// IMPORTANT: Replace these with your actual keys from the Firebase Console!
const firebaseConfig = {
  apiKey: "AIzaSyDDjsY7Lj_nHK6vhl1cKPUAwgl8PxJiNPk",
  authDomain: "talqrma-v8.firebaseapp.com",
  projectId: "talqrma-v8",
  storageBucket: "talqrma-v8.firebasestorage.app",
  messagingSenderId: "634286106749",
  appId: "1:634286106749:web:55442d83c5bb1b4df86914"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and export it
export const db = getFirestore(app);