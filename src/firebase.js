import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPeW5zPQXLBOfELmRcZwBK4eFBVi1Jwgs",
  authDomain: "sns-clone-88be2.firebaseapp.com",
  projectId: "sns-clone-88be2",
  storageBucket: "sns-clone-88be2.appspot.com",
  messagingSenderId: "1003728517641",
  appId: "1:1003728517641:web:5eec0bc3f5be8da589d6d8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };