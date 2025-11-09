// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPQhNl_zt91xGREZFjGTfZ7VTImdkvuso",
  authDomain: "krishi-link-1e5d3.firebaseapp.com",
  projectId: "krishi-link-1e5d3",
  storageBucket: "krishi-link-1e5d3.firebasestorage.app",
  messagingSenderId: "483984369551",
  appId: "1:483984369551:web:2f0015cb62dbb7b86d8dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);