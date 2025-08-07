Google account: NoorFatimaHealthcareGroup@gmail.com


// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4VUfZ5k0UbrR0TB11ogJm6a-JmPGANHA",
  authDomain: "noorfatimahealthcaregrou-4419e.firebaseapp.com",
  databaseURL: "https://noorfatimahealthcaregrou-4419e-default-rtdb.firebaseio.com",
  projectId: "noorfatimahealthcaregrou-4419e",
  storageBucket: "noorfatimahealthcaregrou-4419e.firebasestorage.app",
  messagingSenderId: "608595978890",
  appId: "1:608595978890:web:a545246db9317ea3745b73",
  measurementId: "G-DPECH577P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
