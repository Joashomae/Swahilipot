// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuGWfPkNBXvP8qmdLEz7aapriQKew8ia0",
  authDomain: "space-booking-cde6f.firebaseapp.com",
  projectId: "space-booking-cde6f",
  storageBucket: "space-booking-cde6f.appspot.com",
  messagingSenderId: "156678286921",
  appId: "1:156678286921:web:fcb21de4955b9fae2a1998",
  measurementId: "G-G0NS44B08F"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Reference for form collection()
var formMessage = firebase.database().ref('signup');

//listen to submit event
document.getElementById()