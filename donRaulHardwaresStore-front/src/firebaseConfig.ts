import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJHseL2jixfTBfCm_wyyU1g86aj-CxdTw",
  authDomain: "don-raul-s-hardware-store.firebaseapp.com",
  projectId: "don-raul-s-hardware-store",
  storageBucket: "don-raul-s-hardware-store.appspot.com",
  messagingSenderId: "576693993605",
  appId: "1:576693993605:web:04bcb203cee00c339229ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
