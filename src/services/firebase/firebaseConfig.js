import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC2aMiv-UDQ58wOvibklJBvIgTvVYHLTEc",
  authDomain: "ecommerce-c2cea.firebaseapp.com",
  projectId: "ecommerce-c2cea",
  storageBucket: "ecommerce-c2cea.appspot.com",
  messagingSenderId: "752591578348",
  appId: "1:752591578348:web:4b641a53b61efa3bc931c9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)