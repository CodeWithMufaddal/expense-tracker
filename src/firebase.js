// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFW4HCCAsDVLlGSCoFtaslZc55q2R64Gs",
  authDomain: "expense-tracker-786.firebaseapp.com",
  projectId: "expense-tracker-786",
  storageBucket: "expense-tracker-786.appspot.com",
  messagingSenderId: "692728025364",
  appId: "1:692728025364:web:1f52f4987fec0f18877201",
  measurementId: "G-60QJWT3VY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
