import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseConfig } from './firebase/config.js';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();