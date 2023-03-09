const express = require('express');
const router = express.Router();
const firebaseAdmin = require('../firebaseAdmin');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const userRecord = await firebaseAdmin.auth().createUser({
      email,
      password,
    });

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;





window.onload = function() {
    // Get form elements
    var form = document.querySelector('form');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm-password');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Perform form validation
        if (!validateForm()) {
            return;
        }

        // If validation passes, submit the form
        alert('Form submitted!');
        form.submit();
    });

    // Function to validate form
    function validateForm() {
        // Get values of form inputs
        var usernameValue = username.value.trim();
        var emailValue = email.value.trim();
        var passwordValue = password.value.trim();
        var confirmPasswordValue = confirmPassword.value.trim();

        // Validate username
        if (usernameValue === '') {
            alert('Please enter a username.');
            return false;
        }

        // Validate email
        if (emailValue === '') {
            alert('Please enter an email address.');
            return false;
        } else if (!isValidEmail(emailValue)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Validate password
        if (passwordValue === '') {
            alert('Please enter a password.');
            return false;
        } else if (passwordValue.length < 8) {
            alert('Password must be at least 8 characters long.');
            return false;
        }

        // Validate confirm password
        if (confirmPasswordValue === '') {
            alert('Please confirm your password.');
            return false;
        } else if (passwordValue !== confirmPasswordValue) {
            alert('Passwords do not match.');
            return false;
        }

        // If all validation passes, return true
        return true;
    }

    // Function to validate email
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};