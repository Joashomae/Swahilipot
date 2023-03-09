const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');

// Initialize Firebase app
const firebaseConfig = {
  // Add your Firebase configuration here
};
firebase.initializeApp(firebaseConfig);

// Initialize Express app
const app = express();

// Parse incoming request bodies as JSON
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
  // Get the form data from the request body
  const { name, email, checkin, checkinTime, checkout, checkoutTime, spaceType, price, comments } = req.body;

  // Create a new entry in the Firebase database
  const bookingRef = firebase.database().ref('bookings').push();
  bookingRef.set({
    name,
    email,
    checkin,
    checkinTime,
    checkout,
    checkoutTime,
    spaceType,
    price,
    comments,
  })
    .then(() => {
      // Send a success response to the client
      res.status(200).send('Booking saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving booking:', error);
      // Send an error response to the client
      res.status(500).send('Error saving booking.');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
