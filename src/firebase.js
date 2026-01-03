import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPfMQWCKrbxNJT1512RzvUyGmnm6K-G5U",
  authDomain: "leave-app-178c1.firebaseapp.com",
  projectId: "leave-app-178c1",
  storageBucket: "leave-app-178c1.firebasestorage.app",
  messagingSenderId: "690003641700",
  appId: "1:690003641700:web:f93925d898fbbcfd7c2671"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
