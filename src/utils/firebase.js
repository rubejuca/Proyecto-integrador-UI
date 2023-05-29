import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAriL5P25ByJ2pJ9WED8AyOjwHR2I9Ld2M",
  authDomain: "proyectos-estudio.firebaseapp.com",
  projectId: "proyectos-estudio",
  storageBucket: "proyectos-estudio.appspot.com",
  messagingSenderId: "373093062752",
  appId: "1:373093062752:web:2e7be42975416e54ef4b05"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const doLogin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
};

const doRegister = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
};

const doLogout = async () => {
  return signOut(auth);
}

export { firebaseApp, auth, doLogin, doRegister, doLogout };