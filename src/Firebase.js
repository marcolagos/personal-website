import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/analytics";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfwhJ0zZA6oZx8s4EW9NplyB5D5DSSFPA",
    authDomain: "marco-lagos-personal-website.firebaseapp.com",
    projectId: "marco-lagos-personal-website",
    storageBucket: "marco-lagos-personal-website.appspot.com",
    messagingSenderId: "871952221149",
    appId: "1:871952221149:web:e8516eca5e40cd9171ec34",
    measurementId: "G-H9XYBC313H",
});

var db = firebaseApp.firestore();

export const firebaseAnalytics = firebaseApp.analytics();
export { db };