import 'firebase/compat/auth'
import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyBHL_mtzXMsgBAyn8qTCHbzBmrabKmnFZM",
    authDomain: "my-uclone.firebaseapp.com",
    projectId: "my-uclone",
    storageBucket: "my-uclone.appspot.com",
    messagingSenderId: "874131528436",
    appId: "1:874131528436:web:8310f86dc5db05ea7cdca1"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()