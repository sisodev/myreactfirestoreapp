import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config =  {
    apiKey: "AIzaSyAiVz6Qjep4zx3O8Qc3yWvmbIxUU0OaddU",
    authDomain: "netninja-mario-plan-5e5d3.firebaseapp.com",
    databaseURL: "https://netninja-mario-plan-5e5d3.firebaseio.com",
    projectId: "netninja-mario-plan-5e5d3",
    storageBucket: "netninja-mario-plan-5e5d3.appspot.com",
    messagingSenderId: "877786261661",
    appId: "1:877786261661:web:559823aa2082da6909cc74"
  };

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;