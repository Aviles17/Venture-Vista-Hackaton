import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAdf-qOt6gWN3Q7sViSa0At9Xgm2cDrpPE",
    authDomain: "firetest-20bfa.firebaseapp.com",
    projectId: "firetest-20bfa",
    storageBucket: "firetest-20bfa.appspot.com",
    messagingSenderId: "271457863073",
    appId: "1:271457863073:web:559d849def4192fcf4b7e0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)

export {imgDB,txtDB, app};