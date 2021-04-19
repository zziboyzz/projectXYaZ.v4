// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/analytics";

  const config = {
    apiKey: "AIzaSyBw-Nh1_xoH3NIjp0P9TKrJI2rpdK4P3Mo",
    authDomain: "lustrous-aleph-307306.firebaseapp.com",
    databaseURL: "https://lustrous-aleph-307306-default-rtdb.firebaseio.com",
    projectId: "lustrous-aleph-307306",
  };
  // Initialize Firebase

  export default function initFirebase(){
    if (!firebase.apps.length){
      firebase.initializeApp(config);
    }
  };