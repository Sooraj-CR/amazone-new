import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCui8n0WC8YM1o0l26c6m_IRkIt6R27Jnk",
  authDomain: "e-clone-29a3d.firebaseapp.com",
  projectId: "e-clone-29a3d",
  storageBucket: "e-clone-29a3d.appspot.com",
  messagingSenderId: "1024969855874",
  appId: "1:1024969855874:web:d8c85e8420351335dd759b",
  measurementId: "G-7H4S70JYXX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
