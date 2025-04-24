// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAj3OeImtfw-giTNbF9M_WwOsPEJ9QHaG8",
  authDomain: "seallybook.firebaseapp.com",
  projectId: "seallybook",
  storageBucket: "seallybook.firebasestorage.app",
  messagingSenderId: "560610573042",
  appId: "1:560610573042:web:4a9bc85c1810a7af262e6b",
  measurementId: "G-45HTFX7BZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);