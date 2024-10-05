import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // apiKey: "AIzaSyA2DxGlrrRikl0gZ6kcUCpN-NFsha9p1cE",
  // authDomain: "clinic-booking-69a22.firebaseapp.com",
  // projectId: "clinic-booking-69a22",
  // storageBucket: "clinic-booking-69a22.appspot.com",
  // messagingSenderId: "192938050695",
  // appId: "1:192938050695:web:29a0a139d3824bc536e422",
  // databaseURL: "https://clinic-booking-69a22-default-rtdb.firebaseio.com",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };
