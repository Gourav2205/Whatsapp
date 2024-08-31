import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNSPFfHAFPKalDDFxRDAj_9uXIuDlc9BA",
  authDomain: "whatsappsukriya.firebaseapp.com",
  projectId: "whatsappsukriya",
  storageBucket: "whatsappsukriya.appspot.com",
  messagingSenderId: "450241894175",
  appId: "1:450241894175:web:c4fb282666ed69b415022a",
  measurementId: "G-3BYMT3X52C"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
