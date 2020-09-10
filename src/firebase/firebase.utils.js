import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHia7yM0o80jh7vXlzHVKePgAXBym672Q",
  authDomain: "clone-db-f6ccd.firebaseapp.com",
  databaseURL: "https://clone-db-f6ccd.firebaseio.com",
  projectId: "clone-db-f6ccd",
  storageBucket: "clone-db-f6ccd.appspot.com",
  messagingSenderId: "629938250000",
  appId: "1:629938250000:web:73b7944705128165d68595",
  measurementId: "G-ZWCKQYX9JM",
};

firebase.initializeApp(firebaseConfig);

export const signInWithEmailAndPassword = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const registerNewAccount = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
