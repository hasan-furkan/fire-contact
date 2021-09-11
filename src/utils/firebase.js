import firebase from "firebase/app";
import "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyCkysppAuYivWwpn1vemRLStoXlH6SWhz0",
    authDomain: "fire-contact-in-class.firebaseapp.com",
    projectId: "fire-contact-in-class",
    storageBucket: "fire-contact-in-class.appspot.com",
    messagingSenderId: "937118060854",
    appId: "1:937118060854:web:cdfe78b2e7570304eda397"
};

firebase.initializeApp(firebaseConfig)


export default firebase;