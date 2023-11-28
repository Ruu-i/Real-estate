// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-7d3a5.firebaseapp.com",
  projectId: "real-estate-7d3a5",
  storageBucket: "real-estate-7d3a5.appspot.com",
  messagingSenderId: "645302134481",
  appId: "1:645302134481:web:b5625ca8b00feb9a30c7f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);