// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "fir-chat-app-9cf85.firebaseapp.com",
  projectId: "fir-chat-app-9cf85",
  storageBucket: "fir-chat-app-9cf85.appspot.com",
  messagingSenderId: "683711623832",
  appId: "1:683711623832:web:af827edfa273b55b8196ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);