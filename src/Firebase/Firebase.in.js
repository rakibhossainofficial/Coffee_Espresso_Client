import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIPM-Q-3U_iU74JdUJ0fmmoiwGi-FU6po",
  authDomain: "coffee-store-15e05.firebaseapp.com",
  projectId: "coffee-store-15e05",
  storageBucket: "coffee-store-15e05.firebasestorage.app",
  messagingSenderId: "483273661759",
  appId: "1:483273661759:web:6951fe6f1530070330c78a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

