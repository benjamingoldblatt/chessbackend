// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF90o2BJ7-fsHse8iXD_3sh5o7W2vZlFQ",
  authDomain: "chessbackend.firebaseapp.com",
  projectId: "chessbackend",
  storageBucket: "chessbackend.appspot.com",
  messagingSenderId: "610191864307",
  appId: "1:610191864307:web:16e7b76ad021eb93126286",
  measurementId: "G-6LDSJCXG4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);