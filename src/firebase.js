// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE7Cjafq0ww7EeVYgvMCDV7-D0q2sXf3Y",
  authDomain: "sbobackend.firebaseapp.com",
  projectId: "sbobackend",
  storageBucket: "sbobackend.appspot.com",
  messagingSenderId: "296660905344",
  appId: "1:296660905344:web:37b8e1c4053c757540a565",
  measurementId: "G-QM15TW9D7G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
