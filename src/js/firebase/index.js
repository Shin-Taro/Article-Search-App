import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// import { initializeApp } from 'firebase/app';
// import { doc, getFirestore } from'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import config from './config';

// react-firebase-hooksがv9に対応していないためfirestore関連の記述はv8準拠 //

// const app = initializeApp(config);
// export const db = new getFirestore(app);
firebase.initializeApp(config);
export const db = firebase.firestore();
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

export const useDocOnce = (col, document) => {
  const docRef = db.collection(col).doc(document);
  return useDocumentOnce(docRef);
}