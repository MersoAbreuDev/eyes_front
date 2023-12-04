import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTj3PhIWiUW3hxAyz767wi9Y0FNQe94as",
  authDomain: "neueye-8d943.firebaseapp.com",
  projectId: "neueye-8d943",
  storageBucket: "neueye-8d943.appspot.com",
  messagingSenderId: "285985081338",
  appId: "1:285985081338:web:25de75727bfe0fedbe4643",
  measurementId: "G-4FVT0PVG5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);