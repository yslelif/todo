// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLhAi3QCuhrGzXxtBN9tBDfqesaPnRYwU",
  authDomain: "todo-app-list-8d63e.firebaseapp.com",
  projectId: "todo-app-list-8d63e",
  storageBucket: "todo-app-list-8d63e.appspot.com",
  messagingSenderId: "840725204977",
  appId: "1:840725204977:web:129171b809c1fb2a94be50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);