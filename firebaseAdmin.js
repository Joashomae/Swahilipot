const firebaseAdmin = require('firebase-admin');

const serviceAccount = require('/path/to/serviceAccountKey.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https:space-booking//.firebaseio.com',
});

module.exports = firebaseAdmin;
