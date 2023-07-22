// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK0lOBxEShHoIzG1g_IraQyN84MociMeo",
  authDomain: "college-auth-251c2.firebaseapp.com",
  projectId: "college-auth-251c2",
  storageBucket: "college-auth-251c2.appspot.com",
  messagingSenderId: "568953519221",
  appId: "1:568953519221:web:33c6230a17a5a8cefa8c3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;