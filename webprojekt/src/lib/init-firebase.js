// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /*   apiKey: "AIzaSyAFn-L79jprF4soT2sdvg-o8fenrmUklQ4",
  authDomain: "webprojekt-6a04b.firebaseapp.com",
  projectId: "webprojekt-6a04b",
  storageBucket: "webprojekt-6a04b.appspot.com",
  messagingSenderId: "454298933007",
  appId: "1:454298933007:web:803f812f134736d263107a",
  measurementId: "G-HJ05DYVE0T", */

  apiKey: "AIzaSyCb7VZftF4W6Mxl3p6K0AwakZ6fXhmRykY",
  authDomain: "web2-73238.firebaseapp.com",
  projectId: "web2-73238",
  storageBucket: "web2-73238.appspot.com",
  messagingSenderId: "572279712704",
  appId: "1:572279712704:web:b42a29dc0e438407b5f625",
  measurementId: "G-PP9PGBRH8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const realtimeDB = getDatabase(app);
