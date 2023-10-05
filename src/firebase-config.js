import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA91aSf7z9EQG37Vie8970r9iUnIZRQYdA",
  authDomain: "chathub-43307.firebaseapp.com",
  projectId: "chathub-43307",
  storageBucket: "chathub-43307.appspot.com",
  messagingSenderId: "604181567987",
  appId: "1:604181567987:web:6343137b8e5722fba49a86"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);