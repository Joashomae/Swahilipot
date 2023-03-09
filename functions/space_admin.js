const admin = require("firebase-admin");
const _ = require("lodash");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const db = admin.firestore();

async function dumpFirestoreCollection(collectionName) {
  console.log(`Dumping ${collectionName} collection`);
  const collectionRef = db.collection(collectionName);
  const querySnapshot = await collectionRef.get();
  querySnapshot.forEach((documentSnapshot) => {
    const data = documentSnapshot.data();
    console.log(JSON.stringify(data, null, 2));
    console.log();
  });
}

async function main() {
  const collectionName = "users";
  await dumpFirestoreCollection(collectionName);
}

main().then(() => {
  process.exit(0);
});
