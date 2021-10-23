interface Config {
  readonly apiKey:string | undefined,
  readonly authDomain:string| undefined,
  readonly projectId: string| undefined,
  readonly storageBucket: string| undefined,
  readonly messagingSenderId: string| undefined,
  readonly appId: string| undefined,
};

const firebaseConfig:Config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_I,
};

export default firebaseConfig;