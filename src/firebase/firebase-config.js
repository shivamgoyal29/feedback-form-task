// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqrwXa1UlCYr0WckmBN-FcFLeZDlALbFo",
  authDomain: "feedback-form-task.firebaseapp.com",
  projectId: "feedback-form-task",
  storageBucket: "feedback-form-task.appspot.com",
  messagingSenderId: "155310959953",
  appId: "1:155310959953:web:4dd8588daf52972c2ef770",
  measurementId: "G-XHSK31D014",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
