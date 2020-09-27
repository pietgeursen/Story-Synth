import { initializeApp } from 'firebase/app';

const app = initializeApp({
  apiKey: "", // TODO: Add your apiKey here
  authDomain: "",
  databaseURL: "",
  projectId: "", // TODO: Add your projectId here
  storageBucket: "",
  messagingSenderId: ""
});

export const db = app.firestore();
export const roomsCollection = db.collection('rooms');
