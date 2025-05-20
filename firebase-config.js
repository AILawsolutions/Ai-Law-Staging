
// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDVzD-5KXRtsuo0vL9AxdWldS_KGHxE",
  authDomain: "ai-law-solutions-c5c10.firebaseapp.com",
  projectId: "ai-law-solutions-c5c10",
  storageBucket: "ai-law-solutions-c5c10.appspot.com",
  messagingSenderId: "466042562937",
  appId: "1:466042562937:web:f6892db46226e76450a7a8",
  measurementId: "G-J1R02JCJHJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
