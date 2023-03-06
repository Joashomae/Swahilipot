// Import required packages
const express = require("express");
const firebase = require("firebase");

// Initialize express app
const app = express();
const port = 3000;

// Serve static files from public folder
app.use(express.static("public"));

// Handle form submission
app.post("/bookings", async (req, res) => {
    try {
        // Extract data from form submission
        const name = req.body.name;
        const email = req.body.email;
        const checkin = req.body.checkin;
        const checkout = req.body.checkout;
        const requirements = req.body.requirements;
        const price = req.body.price;
        const comments = req.body.comments;

        // Save data to Firebase database
        const db = firebase.firestore();
        await db.collection("bookings").add({
            name: name,
            email: email,
            checkin: checkin,
            checkout: checkout,
            requirements: requirements,
            price: price,
            comments: comments
        });

        // Send success response
        res.status(200).send("Booking successful!");
    } catch (error) {
        // Send error response
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
