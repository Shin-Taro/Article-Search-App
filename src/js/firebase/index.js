import { initializeApp } from 'firebase/app';
import { getFirestore } from'firebase/firestore';
import config from './config';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";

initializeApp(config);
export const db = new getFirestore();
export const googleProvider = new GoogleAuthProvider();

export const auth = new getAuth();

export const signIn = () => {
  signInWithRedirect(auth, googleProvider);
};

export const logOut = () => {
  signOut(auth).then(() => {
    console.log("logOut!!");
  }).catch((error) => {
    console.log(error);
  });
};