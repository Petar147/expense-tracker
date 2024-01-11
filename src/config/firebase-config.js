// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZjHLLuD9R9P-TSwU744V2r6rdPW7kFi8",
  authDomain: "expense-tracker-98de5.firebaseapp.com",
  projectId: "expense-tracker-98de5",
  storageBucket: "expense-tracker-98de5.appspot.com",
  messagingSenderId: "429849126639",
  appId: "1:429849126639:web:9562f321c30a5f510c5d1a",
  measurementId: "G-R8GLPBZLG3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = new getFirestore(app)
const analytics = getAnalytics(app);

//firebase login
//firebase init
//firebase deploy
