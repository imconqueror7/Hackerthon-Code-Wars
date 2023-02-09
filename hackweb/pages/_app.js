import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export default function App({ Component, pageProps }) {

  return ( 
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer />
    </>
  );
}
