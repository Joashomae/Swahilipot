// js/booking.js

const { firebase } = require('./index');

function fetchSpaces(callback) {
  const spacesRef = firebase.database().ref('spaces');
  spacesRef.on('value', (snapshot) => {
    const spaces = snapshot.val();
    callback(spaces);
  });
}

module.exports.fetchSpaces = fetchSpaces;

const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const checkin = formData.get('checkin');
        const timeFrom = formData.get('time-from');
        const timeTo = formData.get('time-to');
        const checkout = formData.get('checkout');
        const spaceType = formData.get('space-type');
        const price = formData.get('price');
        const comments = formData.get('comments');
        console.log(`
            Name: ${name}
            Email: ${email}
            Book from: ${checkin} at ${timeFrom}
            Book upto: ${checkout} at ${timeTo}
            Extra requirements: ${spaceType}
            Price: ${price}
            Any other comments: ${comments}
        `);
        form.reset();
    });