// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk3Aa_iwZIdxfCpWhLTfHfxYlL_-td-jc",
  authDomain: "netflixgpt-e4cb3.firebaseapp.com",
  projectId: "netflixgpt-e4cb3",
  storageBucket: "netflixgpt-e4cb3.appspot.com",
  messagingSenderId: "806137627067",
  appId: "1:806137627067:web:da4c260cbdcbda413c849e",
  measurementId: "G-RZ2H4G3HCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();