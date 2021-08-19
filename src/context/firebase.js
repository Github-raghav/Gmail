import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCE690ZytMYm3oNNspb7cQHV9C2uleJZPs",
    authDomain: "cln-34b10.firebaseapp.com",
    projectId: "cln-34b10",
    storageBucket: "cln-34b10.appspot.com",
    messagingSenderId: "992894722105",
    appId: "1:992894722105:web:f4324779f85f9855d8ede8"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};