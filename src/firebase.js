// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD57AB8qywupUSnoRF7SWBEVkN2oIKikSo",
  authDomain: "twitter-clone-94cff.firebaseapp.com",
  projectId: "twitter-clone-94cff",
  storageBucket: "twitter-clone-94cff.appspot.com",
  messagingSenderId: "450167732280",
  appId: "1:450167732280:web:ffb28cbf015ed3f08e8ecd",
  measurementId: "G-LVKS0FY6NV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
