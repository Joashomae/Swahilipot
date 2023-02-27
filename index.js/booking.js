// Get the form element
const bookingForm = document.getElementById("booking-form");

// Add an event listener to the submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form from submitting
    // Get the form data
    const formData = new FormData(bookingForm);
    // Do something with the form data, like send it to a server
    console.log(formData);
});

// Add an event listener to the cancel button
const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", () => {
    // Reset the form
    bookingForm.reset();
});