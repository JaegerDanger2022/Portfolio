// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSlLpiCWjxiGrVggnVtGbwY3iQnOWR3N8",
  authDomain: "franca-9baba.firebaseapp.com",
  projectId: "franca-9baba",
  storageBucket: "franca-9baba.appspot.com",
  messagingSenderId: "984201941602",
  appId: "1:984201941602:web:5264e7847192a3b04a773b",
  measurementId: "G-K8WKJ0M3PX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
