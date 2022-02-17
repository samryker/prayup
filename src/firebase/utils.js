import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyASWCp7arimbwaLVanhGhZucNFWhVE-s10",
    authDomain: "prayup-9efba.firebaseapp.com",
    projectId: "prayup-9efba",
    storageBucket: "prayup-9efba.appspot.com",
    messagingSenderId: "264882387609",
    appId: "1:264882387609:web:09755487db2ef1e68e1608",
    measurementId: "G-P22FDQ6YQ8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
const getapps = getApps();
export { auth, db, storage, getApps };
