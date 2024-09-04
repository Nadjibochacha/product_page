// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHk-EMAHYOB37G0dPUIlM864U3Ay0F220",
  authDomain: "orders-website.firebaseapp.com",
  projectId: "orders-website",
  storageBucket: "orders-website.appspot.com",
  messagingSenderId: "835296509334",
  appId: "1:835296509334:web:9e4ff0ed3223ddcf1db1b7",
  measurementId: "G-GFBMV0QCCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);