import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPxgmIXd_anrbg2C4SI3_mAtsYz4CG1cU",
  authDomain: "facebook-clone-b3740.firebaseapp.com",
  projectId: "facebook-clone-b3740",
  storageBucket: "facebook-clone-b3740.appspot.com",
  messagingSenderId: "459880854493",
  appId: "1:459880854493:web:64975e2ad4542328163c34",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
