import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCULTFDEYPqc2khfBulr7XZUkc2tTNV7CQ",
  authDomain: "cbt-bahasa-inggris.firebaseapp.com",
  databaseURL: "https://cbt-bahasa-inggris-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cbt-bahasa-inggris",
  storageBucket: "cbt-bahasa-inggris.firebasestorage.app",
  messagingSenderId: "351089060072",
  appId: "1:351089060072:web:ffad4de045e1a546fe415d",
  measurementId: "G-FSB93KMWJD"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
