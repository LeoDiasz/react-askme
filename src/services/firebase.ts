import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY as string,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
  databaseURL: import.meta.env.VITE_DATABASE_URL as string,
  projectId: import.meta.env.VITE_PROJECTID as string,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID as string,
  appId: import.meta.env.VITE_APPID as string,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {app, auth, database};