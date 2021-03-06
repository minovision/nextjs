import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnToxfhCLk0kAgv9e5GH9eAC5mFISHsqY",
  authDomain: "nextfire-app-223a0.firebaseapp.com",
  projectId: "nextfire-app-223a0",
  storageBucket: "nextfire-app-223a0.appspot.com",
  messagingSenderId: "193587336276",
  appId: "1:193587336276:web:6707f1506c3301745b09c1",
  measurementId: "G-4QYFYBGK6L",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : "";

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
