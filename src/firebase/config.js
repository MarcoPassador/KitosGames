// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7vAaUyS_iFxicqs90k_xYEtdmeZ5vSgY",
  authDomain: "kitos-games.firebaseapp.com",
  projectId: "kitos-games",
  storageBucket: "kitos-games.appspot.com",
  messagingSenderId: "205711021240",
  appId: "1:205711021240:web:64c5ddd3b4b1b63d40904d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)