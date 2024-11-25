// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyC2mdLTY054NUhPQSHU7QU3Gudi5FRxzng",
  authDomain: "fir-ddb20.firebaseapp.com",
  projectId: "fir-ddb20",
  storageBucket: "fir-ddb20.appspot.com",
  messagingSenderId: "488568289378",
  appId: "1:488568289378:web:8d65607cfd3dc0d23ff93b",
  measurementId: "G-3DERP9LT64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }