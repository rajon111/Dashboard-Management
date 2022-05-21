// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2aDo2Qhw0RdaS6VmO59MbX8V4TG_mud0",
  authDomain: "assignment-12-2b6d5.firebaseapp.com",
  projectId: "assignment-12-2b6d5",
  storageBucket: "assignment-12-2b6d5.appspot.com",
  messagingSenderId: "661547669074",
  appId: "1:661547669074:web:2c120e060eecc031e3f18b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;