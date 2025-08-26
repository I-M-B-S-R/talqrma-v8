// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // For Firestore database

// Your web app's Firebase configuration
// For better security, use environment variables (see .env file in root):
// apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
const firebaseConfig = {
  apiKey: "AIzaSyDDjsY7Lj_nHK6vhl1cKPUAwgl8PxJiNPk",  // Or import.meta.env.VITE_FIREBASE_API_KEY
  authDomain: "talqrma-v8.firebaseapp.com",  // Or import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
  projectId: "talqrma-v8",  // Or import.meta.env.VITE_FIREBASE_PROJECT_ID
  storageBucket: "talqrma-v8.firebasestorage.app",  // Or import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
  messagingSenderId: "634286106749",  // Or import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
  appId: "1:634286106749:web:6bde710e172ae031f86914"  // Or import.meta.env.VITE_FIREBASE_APP_ID
};

let app;
let db;

// Initialize Firebase with error handling
try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);  // Initialize Firestore
  console.log("Firebase initialized successfully!");
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

// Export for use in other files
export { app, db, firebaseConfig };