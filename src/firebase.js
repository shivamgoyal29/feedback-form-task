// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
