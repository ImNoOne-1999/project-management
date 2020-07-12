import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBeXEiqr7mcKkI5eKNm6fBjpv1zkvlruww",
  authDomain: "project-management-43b92.firebaseapp.com",
  databaseURL: "https://project-management-43b92.firebaseio.com",
  projectId: "project-management-43b92",
  storageBucket: "project-management-43b92.appspot.com",
  messagingSenderId: "900108882513",
  appId: "1:900108882513:web:40127cd21f7af719ca9e70",
  measurementId: "G-SJV75GJTWX"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;