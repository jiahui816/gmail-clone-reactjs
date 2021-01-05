import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_IMt3Iy0jOMeUEJCXZxrMW9da6aD1q2I",
  authDomain: "clone-78f20.firebaseapp.com",
  projectId: "clone-78f20",
  storageBucket: "clone-78f20.appspot.com",
  messagingSenderId: "740930438732",
  appId: "1:740930438732:web:0614a8b7af738b1b7d56e9",
  measurementId: "G-96NM3MTNYZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
