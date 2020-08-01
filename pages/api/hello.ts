import admin, { ServiceAccount } from 'firebase-admin';
import { fireStore } from '../../config';
export default async (req, res) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(fireStore.credential as ServiceAccount),
      databaseURL: fireStore.databaseURL,
    });
  }

  const db = admin.firestore();

  const snapshot = await db.collection('users').get();
  const users = [];
  snapshot.forEach((doc) => {
    users.push(doc.data());
    console.log(doc.id, '=>', doc.data());
  });

  res.status(200).json({ text: 'Hell2o', a: users });
};
