import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMpz3muN26oMH5TBmigYaUNjrCoChCBK4",
  authDomain: "user-management-bb57d.firebaseapp.com",
  projectId: "user-management-bb57d",
  storageBucket: "user-management-bb57d",
  messagingSenderId: "945558102195",
  appId: "1:945558102195:web:41596c4f3d3e69f1fa10c6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
