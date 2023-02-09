import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD-ud5wELd8Sb6qBkgljlYce15N6ZfqnPw",
  authDomain: "hackweb-d5c9b.firebaseapp.com",
  projectId: "hackweb-d5c9b",
  storageBucket: "hackweb-d5c9b.appspot.com",
  messagingSenderId: "46158534953",
  appId: "1:46158534953:web:b6d6bdc2552d6d10a37f38",
  measurementId: "G-V9MWDG62CV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};