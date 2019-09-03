import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "../services/firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);

export { app };
