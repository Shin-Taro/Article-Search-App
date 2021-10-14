import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import config from './config';
import { FirebaseError } from '@firebase/util';

// react-firebase-hooksがv9に対応していないためfirestore関連の記述はv8準拠 //
// const app = initializeApp(config);
// export const db = new getFirestore(app);
firebase.initializeApp(config);
export const db = firebase.firestore();
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();

export const signIn = ():void => {
  signInWithRedirect(auth, googleProvider);
};

export const logOut = ():void => {
  signOut(auth).catch((error) => {
    console.log(error);
  });
};

export const useAuth = (): [any, boolean, any] => {
  return useAuthState(auth);
};

export const getUser = (user:any):void => {
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
          isActive: false,
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

type CollectionData = [any[] | undefined, boolean, FirebaseError | undefined];

export const usePresetsData = (user:any):CollectionData => {
  const ref = db.collection("users").doc(user.uid).collection("presets");
  return useCollectionData(ref, {idField: "id"});
};

export const changeActive = (user:any, prev:Preset, current:string): void => {
  const batch = db.batch();
  if(prev){
    const prevRef = db.collection("users").doc(user.uid).collection("presets").doc(prev.id);
    batch.update(prevRef, {isActive: false});
  }
  const currentRef = db.collection("users").doc(user.uid).collection("presets").doc(current);
  batch.update(currentRef, {isActive: true});
  batch.commit().catch(error => {console.log(error)});
};

export const addPreset = (user:any, name:string, value:string): void => {
  const ref = db.collection("users").doc(user.uid).collection("presets");
  ref.add({
    name: name,
    value: value,
    isActive: false,
  }).catch((error) => {console.log(error)});
};

export const deletePresets = (user:any, list:string[]) => {
  const ref = db.collection("users").doc(user.uid).collection("presets");
  const batch = db.batch();
  list.forEach(element => {
    batch.delete(ref.doc(element));
  });
  batch.commit().catch(error => {
    console.log(error);
  });
};