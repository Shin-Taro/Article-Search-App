import { initializeApp } from 'firebase/app';
import { getFirestore } from'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import config from './config';


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

export const useAuth = () => {
  return useAuthState(auth);
};