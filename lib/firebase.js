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
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const getUserWithUsername = async (username) => {
  console.log(`x: ${username}`);
  const userRef = firestore.collection("users");
  const query = userRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  console.log(userDoc);
  return userDoc;
};

const postToJSON = (doc) => {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.creaatedAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
};

export default postToJSON;
