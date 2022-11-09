// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDstK5fjDIE5x5t75-Wm063w3PcEMpt9rE",
  authDomain: "tourist-guide-client-8307d.firebaseapp.com",
  projectId: "tourist-guide-client-8307d",
  storageBucket: "tourist-guide-client-8307d.appspot.com",
  messagingSenderId: "768222972177",
  appId: "1:768222972177:web:8a40ecc4d111d8a3a924b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;