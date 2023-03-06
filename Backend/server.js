// Require the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create an instance of express
const app = express();

// Create a pool of connections to the database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'database_name'
});

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// Handle form submission
app.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const checkin = req.body.checkin;
    const checkout = req.body.checkout;
    const comments = req.body.comments;

    // Insert data into the database
    const query = `INSERT INTO bookings (name, email, checkin, checkout, comments) VALUES ('${name}', '${email}', '${checkin}', '${checkout}', '${comments}');`;
    pool.query(query, (err, results) => {
        if (err) {
            console.log(err);
            res.send('An error occurred!');
        } else {
            console.log(results);
            res.send('Booking Successful!');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
