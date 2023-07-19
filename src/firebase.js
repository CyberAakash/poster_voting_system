import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHbdFgeMVlB6ydUCvjUTZPmNW1_hsD0Xo",
  authDomain: "photo-club-voting.firebaseapp.com",
  projectId: "photo-club-voting",
  storageBucket: "photo-club-voting.appspot.com",
  messagingSenderId: "290190959082",
  appId: "1:290190959082:web:5e8c6be77bc8a26c8a1293",
};

import { getStorage } from "firebase/storage";
// Firestore
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

//init services
const db = getFirestore();

//collection ref
// const colRef = collection(db, "cards");

//storage
const storage = getStorage();

export { app, db, storage };