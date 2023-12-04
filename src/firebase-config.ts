import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTj3PhIWiUW3hxAyz767wi9Y0FNQe94as",
  authDomain: "neueye-8d943.firebaseapp.com",
  projectId: "neueye-8d943",
  storageBucket: "neueye-8d943.appspot.com",
  messagingSenderId: "285985081338",
  appId: "1:285985081338:web:25de75727bfe0fedbe4643",
  measurementId: "G-4FVT0PVG5V"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);