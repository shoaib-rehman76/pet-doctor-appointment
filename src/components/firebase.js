

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDCtskxVadDelkgoIDZSs-4Z2stkGpTPm4",
    authDomain: "pet-appointment-2.firebaseapp.com",
    projectId: "pet-appointment-2",
    storageBucket: "pet-appointment-2.appspot.com",
    messagingSenderId: "1042960908941",
    appId: "1:1042960908941:web:e24c8a1f0d6c70a0f718c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
