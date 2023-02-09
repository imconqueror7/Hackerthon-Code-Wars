import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const analytics = firebase.analytics(); 

firebase.initializeApp({
  const firebaseConfig = {
    apiKey: "AIzaSyD-ud5wELd8Sb6qBkgljlYce15N6ZfqnPw",
    authDomain: "hackweb-d5c9b.firebaseapp.com",
    projectId: "hackweb-d5c9b",
    storageBucket: "hackweb-d5c9b.appspot.com",
    messagingSenderId: "46158534953",
    appId: "1:46158534953:web:b6d6bdc2552d6d10a37f38",
    measurementId: "G-V9MWDG62CV"
  };
})

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function App({ Component, pageProps }) {

  const [user] = useAuthState(auth);
  return ( 
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer />
    </>
  );
}
