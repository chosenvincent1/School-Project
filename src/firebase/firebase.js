
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query} from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCcRsaE6oNKb9iL8jPfM8U4OJoAW9A9ugs",
  authDomain: "hostel-refunding-system.firebaseapp.com",
  projectId: "hostel-refunding-system",
  storageBucket: "hostel-refunding-system.appspot.com",
  messagingSenderId: "46680568300",
  appId: "1:46680568300:web:890d87490aaed3057dd0c9",
  measurementId: "G-RVK4ZZBNXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const colRef = collection(db, 'students');
// export const q = query(colRef)