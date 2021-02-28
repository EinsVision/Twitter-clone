import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAQJELTEnT19sk9VxkKxE27bmwgEIpzWjY",
  authDomain: "twitter-clone-5a659.firebaseapp.com",
  projectId: "twitter-clone-5a659",
  storageBucket: "twitter-clone-5a659.appspot.com",
  messagingSenderId: "314558956977",
  appId: "1:314558956977:web:2466e425d20e267feea990"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;