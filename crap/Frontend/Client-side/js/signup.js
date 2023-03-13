// Initialize Firebase using the config object
firebase.initializeApp(firebaseConfig);

// Get a reference to the database
var database = firebase.database();

// Listen for the form submission event
$('#signup').submit(function(event) {
  event.preventDefault();

  // Get the values of the input fields
  var username = $('#username').val();
  var email = $('#email').val();
  var password = $('#password').val();
  var confirmPassword = $('#confirmPassword').val();

  // Validate the form data
  if (!username || !email || !password || !confirmPassword) {
    alert('Please fill in all fields.');
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Create a new user account in Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Get the UID of the newly created user
      var uid = userCredential.user.uid;

      // Save the user data to the database
      database.ref('users/' + uid).set({
        username: username,
        email: email
      }).then(function() {
        // Redirect the user to the home page
        window.location.href = '/html/home.html';
      }).catch(function(error) {
        alert(error.message);
      });
    }).catch(function(error) {
      alert(error.message);
    });
});
