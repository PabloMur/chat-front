import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCCxGRyuXqIcgOG12-q0KR3bOFa-y8S7cs",
  authDomain: "chat-backend-ebe6e.firebaseapp.com",
  databaseURL: "https://chat-backend-ebe6e-default-rtdb.firebaseio.com",
  projectId: "chat-backend-ebe6e",
  storageBucket: "chat-backend-ebe6e.appspot.com",
  messagingSenderId: "804143605154",
  appId: "1:804143605154:web:f1fa7109ca3bce15247efb",
  measurementId: "G-RJ6JL500B2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDataBase = getDatabase(app);
