const express = require('express');
const jsondb = require('jsondb');

const router = express.Router();

// Get a list of available spaces
router.get('/spaces', (req, res) => {
  const db = new jsondb('data/spaces.json');
  const spaces = db.getData('/');
  res.json(spaces);
});

// Get a single space by ID
router.get('/spaces/:id', (req, res) => {
  const db = new jsondb('data/spaces.json');
  const space = db.getData('/' + req.params.id);
  res.json(space);
});

// Book a space
router.post('/bookings', (req, res) => {
    const db = new jsondb('db.json', true, true); // create or load the bookings database
    const bookings = db.getData('/');
  
    // Create a new booking object with the data from the request body
    const newBooking = {
      id: bookings.length + 1,
      spaceId: req.body.spaceId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      status: 'booked',
    };
  
    // Add the new booking to the database
    db.push(`/${newBooking.id}`, newBooking);
  
    // Send a response with the new booking object
    res.json(newBooking);
  });
  