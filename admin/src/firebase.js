// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKJCanx8MJtacMVH7WbXtvzeGAkHoE5Rg",
  authDomain: "react-app-shoppingapp.firebaseapp.com",
  projectId: "react-app-shoppingapp",
  storageBucket: "react-app-shoppingapp.appspot.com",
  messagingSenderId: "604381788832",
  appId: "1:604381788832:web:16aaefcbe2b98ed6d9e7c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;