import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData, useCollectionData } from 'react-firebase-hooks/firestore';
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
  const colRef = docRef.collection("presets");

  docRef.get().then((doc) => {
    if(!doc.exists){
      docRef.set({
        name: user.displayName
      }).then(() => {
        colRef.add({
          name: "新着",
          value: "created%3A%3E2021-08-01",
          isActive: true,
        });
      }).then(() => {
        colRef.add({
          name: "人気",
          value: "created%3A%3E2021-08-01+stocks%3A%3E20",
          isActive: false,
        });
      }).then(() => {
        colRef.add({
          name: "殿堂入り",
          value: "stocks%3A%3E5000",
          isActive: false,
        });
      }).catch((error) => {
        console.log(error);
      });
    }
  });
};

export const useDocData = (ref) => {
  return useDocumentData(ref);
};

export const usePresetsData = (user) => {
  const ref = db.collection("users").doc(user.uid).collection("presets");
  return useCollectionData(ref, {idField: "id"});
};

export const changeActive = (user, prev, current) => {
  const batch = db.batch();
  if(prev){
    const prevRef = db.collection("users").doc(user.uid).collection("presets").doc(prev.id);
    batch.update(prevRef, {isActive: false});
  }
  const currentRef = db.collection("users").doc(user.uid).collection("presets").doc(current);
  batch.update(currentRef, {isActive: true});
  batch.commit().catch(error => {console.log(error)});
};

export const addPreset = (user, name, value) => {
  const ref = db.collection("users").doc(user.uid).collection("presets");
  ref.add({
    name: name,
    value: value,
    isActive: false,
  }).catch((error) => {console.log(error)});
};

export const deletePresets = (user, list) => {
  const ref = db.collection("users").doc(user.uid).collection("presets");
  const batch = db.batch();
  list.forEach(element => {
    batch.delete(ref.doc(element));
  });
  batch.commit().catch(error => {
    console.log(error);
  });
};