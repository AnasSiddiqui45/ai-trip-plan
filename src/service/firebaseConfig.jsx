// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvhH2s--IFl6NkmzsI79znoopCCqBnDko",
  authDomain: "ai-trip-planner-c810a.firebaseapp.com",
  projectId: "ai-trip-planner-c810a",
  storageBucket: "ai-trip-planner-c810a.appspot.com",
  messagingSenderId: "240984516401",
  appId: "1:240984516401:web:c8626ddd060ba39e11b210",
  measurementId: "G-8PX6NYY2RH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);