// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUcL10bkMAlTtgJvmNC98HRUNfrViOUA4",
    authDomain: "the-social-network-5b626.firebaseapp.com",
    projectId: "the-social-network-5b626",
    storageBucket: "the-social-network-5b626.appspot.com",
    messagingSenderId: "1082295149439",
    appId: "1:1082295149439:web:1b6402bb898df3b4c4b04a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { db, storage, app };