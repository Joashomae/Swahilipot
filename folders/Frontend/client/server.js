const firebaseConfig = {
  apiKey: "AIzaSyDuGWfPkNBXvP8qmdLEz7aapriQKew8ia0",
  authDomain: "space-booking-cde6f.firebaseapp.com",
  projectId: "space-booking-cde6f",
  storageBucket: "space-booking-cde6f.appspot.com",
  messagingSenderId: "156678286921",
  appId: "1:156678286921:web:fcb21de4955b9fae2a1998",
  measurementId: "G-G0NS44B08F"
};
const admin = require('firebase-admin');
const serviceAccount = require('/home/black_ops/Downloads/space-booking-cde6f-firebase-adminsdk-8qfed-c3d162da06.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`
});

const db = admin.database();
const auth = admin.auth();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all users
app.get('/users', async (req, res) => {
  try {
    const usersRef = db.ref('users');
    const users = await usersRef.once('value');
    const data = users.val();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Signup 
// Create a new user account and save the data to the database
app.post('/signup', function(req, res) {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;

  // Validate the form data
  if (!username || !email || !password || !confirmPassword) {
    res.status(400).json({ error: 'Please fill in all fields.' });
    return;
  }
  if (password !== confirmPassword) {
    res.status(400).json({ error: 'Passwords do not match.' });
    return;
  }

  // Create a new user account in Firebase Authentication
  admin.auth().createUser({
    email: email,
    password: password
  }).then(function(userRecord) {
    // Save the user data to the database
    admin.database().ref('users/' + userRecord.uid).set({
      username: username,
      email: email
    }).then(() => {
      res.status(200).json({ message: 'User account created successfully.' });
    }).catch((error) => {
      res.status(500).json({ error: error.message });
    });
  }).catch(function(error) {
    // Handle errors that may occur during user creation
    res.status(500).json({ error: error.message });
  });
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Authenticate the user
    const user = await auth.signInWithEmailAndPassword(email, password);
    
    // Return a success message with user data
    res.status(200).json({ message: 'Login successful', user: user });
  } catch (error) {
    // Handle authentication errors
    console.error(error);
    res.status(401).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Login page
app.get('/login', (req, res) => {
  res.send('This is the login page');
});


