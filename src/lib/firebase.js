import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJnK9N1aEA7w6M1S5mJ5-EVsBdJKnTWMI",
  authDomain: "fir-chat-app-9cf85.firebaseapp.com",
  databaseURL: "https://fir-chat-app-9cf85-default-rtdb.firebaseio.com",
  projectId: "fir-chat-app-9cf85",
  storageBucket: "fir-chat-app-9cf85.appspot.com",
  messagingSenderId: "683711623832",
  appId: "1:683711623832:web:af827edfa273b55b8196ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);