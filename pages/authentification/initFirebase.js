// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCznrnvmGsKnbSbSmoQP1KNj2fNUuTxEQQ",
  authDomain: "smaedbxenia9no.firebaseapp.com",
  databaseURL: "https://smaedbxenia9no-default-rtdb.firebaseio.com",
  projectId: "smaedbxenia9no",
  storageBucket: "smaedbxenia9no.appspot.com",
  messagingSenderId: "410302656960",
  appId: "1:410302656960:web:93a7600510ca2f72955825",
  measurementId: "G-XPRTC5VFDY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;