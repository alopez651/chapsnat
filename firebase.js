import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
const firebaseConfig = {
  apiKey: "AIzaSyC7CQwBSzjC_tlEiMd2Mc8Sh9Fb_Cwc1p8",
  authDomain: "chapsnat-3f4f7.firebaseapp.com",
  projectId: "chapsnat-3f4f7",
  storageBucket: "chapsnat-3f4f7.appspot.com",
  messagingSenderId: "239440555368",
  appId: "1:239440555368:web:d7d431a3733e778d273add",
  measurementId: "G-W4Y70B8JL2",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firestore;

// import firebase from "firebase/app";
// import "firebase/firebase-firestore";

//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCll25O1D_bzuq7YomV9_MAvIHwknNmpfg",
//     authDomain: "chapsnat-ana.firebaseapp.com",
//     projectId: "chapsnat-ana",
//     storageBucket: "chapsnat-ana.appspot.com",
//     messagingSenderId: "574624873589",
//     appId: "1:574624873589:web:e5fbd49bbdd3fb2b088c3c"
//   };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// let firestore = firebase.firestore();
// export default firestore;