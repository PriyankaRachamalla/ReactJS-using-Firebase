import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCSG9DxB0NXDMyypV10fmivz52yMuFUeRk",
    authDomain: "net-ninja-marioplan-b46ec.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-b46ec.firebaseio.com",
    projectId: "net-ninja-marioplan-b46ec",
    storageBucket: "net-ninja-marioplan-b46ec.appspot.com",
    messagingSenderId: "831145279615"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;