import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7G-tpYZS2Jnqb_vYVAkYXh2-xefPw9jo",
  authDomain: "disneyplus-clone-dab4c.firebaseapp.com",
  projectId: "disneyplus-clone-dab4c",
  storageBucket: "disneyplus-clone-dab4c.appspot.com",
  messagingSenderId: "1044265646276",
  appId: "1:1044265646276:web:18785b8de85a9e23583191",
  measurementId: "G-7MW9969F1K",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
