import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkbetxw1KyPP5VQyXBuh5o0JubSRw1_iU",
  authDomain: "second-authenti.firebaseapp.com",
  projectId: "second-authenti",
  storageBucket: "second-authenti.firebasestorage.app",
  messagingSenderId: "83816640829",
  appId: "1:83816640829:web:6a62667fff8b2f212e1554"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;