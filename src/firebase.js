import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8Zx7xP8EHYiAotOfV0Fwsj4r87VTnU9c",
    authDomain: "ari-baliumkm.firebaseapp.com",
    projectId: "ari-baliumkm",
    storageBucket: "ari-baliumkm.appspot.com",
    messagingSenderId: "38267689097",
    appId: "1:38267689097:web:5d31a42f87fd0a000ace58",
    measurementId: "G-HMG3GM2HTQ"
  };  


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;