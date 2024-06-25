import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALnMCMvRZEPwrwlPfh4RT9CEyz1FQ2vNM",
  authDomain: "savelinkdatabase.firebaseapp.com",
  projectId: "savelinkdatabase",
  storageBucket: "savelinkdatabase.appspot.com",
  messagingSenderId: "947136810929",
  appId: "1:947136810929:web:0bec98b0580da78f91b790",
  measurementId: "G-KREKT98CP4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
