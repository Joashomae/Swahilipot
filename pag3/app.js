// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuGWfPkNBXvP8qmdLEz7aapriQKew8ia0",
  authDomain: "space-booking-cde6f.firebaseapp.com",
  databaseURL: "https://space-booking-cde6f-default-rtdb.firebaseio.com",
  projectId: "space-booking-cde6f",
  storageBucket: "space-booking-cde6f.appspot.com",
  messagingSenderId: "156678286921",
  appId: "1:156678286921:web:fcb21de4955b9fae2a1998",
  measurementId: "G-G0NS44B08F"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Reference for collection()
var usersCollection = db.collection("users");

// Listen to submit event
document.getElementById('signup').addEventListener('submit', formSubmit);

// Submit form
function formSubmit(e) {
  e.preventDefault();

  // Get values from DOM
  var username = getElementVal('username');
  var email = getElementVal('email');
  var password = getElementVal('password');
  var confirmPassword = getElementVal('confirmPassword');

  console.log(username, email, password, confirmPassword);

  sendMessage(username, email, password, confirmPassword);

  // Show alert message
  document.querySelector('.alert').style.display = 'block';

  // Hide alert message after 7 seconds
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  // Form reset after submission
  document.getElementById('signup').reset();
}

// Send message values
function sendMessage(username, email, password, confirmPassword) {
  usersCollection.add({
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

// Get element value
function getElementVal(selector) {
  return document.querySelector(selector).value;
}
