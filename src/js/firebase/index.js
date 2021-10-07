import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// import { initializeApp } from 'firebase/app';
// import { doc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from 'react-firebase-hooks/firestore';
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
  signOut(auth).catch((error) => {
    console.log(error);
  });
};

export const useAuth = () => {
  return useAuthState(auth);
};

export const getUser = (user) => {
  const docRef = db.collection("users").doc(user.uid);
  docRef.get().then((doc) => {
    if(!doc.exists){
      docRef.set({
        name: user.displayName
      }).then(() => {
        docRef.collection("presets").doc("news").set({
          name: "新着",
          value: "created%3A%3E2021-08-01",
          isActive: true,
        });
      }).then(() => {
        docRef.collection("presets").doc("topics").set({
          name: "人気",
          value: "created%3A%3E2021-08-01+stocks%3A%3E20",
          isActive: false,
        });
      }).then(() => {
        docRef.collection("presets").doc("legends").set({
          name: "殿堂入り",
          value: "stocks%3A%3E5000",
          isActive: false,
        });
      }).catch((error) => {
        console.log(error);
      });
    }
  });
  return docRef;
};

export const useDocData = (ref) => {
  return useDocumentData(ref);
};