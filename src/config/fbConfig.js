import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw1ccr2x4AW5wGDMaCHO_nM_VJs2uYk5M",
  authDomain: "marioplan-4fc44.firebaseapp.com",
  projectId: "marioplan-4fc44",
  storageBucket: "marioplan-4fc44.appspot.com",
  messagingSenderId: "560002414410",
  appId: "1:560002414410:web:6ead61876bd34c8b69f3b3",
  measurementId: "G-HJ5PSJ1RNX",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebaseConfig.firestore();

export default firebase;
