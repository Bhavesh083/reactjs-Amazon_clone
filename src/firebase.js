import firebase from 'firebase'

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDPpwMxQfm9kU27KzCc_Qp17h32vakk7uE",
    authDomain: "clone-67005.firebaseapp.com",
    projectId: "clone-67005",
    storageBucket: "clone-67005.appspot.com",
    messagingSenderId: "429482903771",
    appId: "1:429482903771:web:b1219c2169514d5bde24fe",
    measurementId: "G-R0FGXNB004",
});

const auth = firebase.auth();

export {auth }