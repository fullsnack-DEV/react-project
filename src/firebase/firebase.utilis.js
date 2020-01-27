import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAKgh4iz1E21j9cid4GkxqnbAUEnjvwF3M",
  authDomain: "crown-db-40e6c.firebaseapp.com",
  databaseURL: "https://crown-db-40e6c.firebaseio.com",
  projectId: "crown-db-40e6c",
  storageBucket: "crown-db-40e6c.appspot.com",
  messagingSenderId: "77073510615",
  appId: "1:77073510615:web:5c4e98d767e769965f8092",
  measurementId: "G-T171SY9BWX"
};
firebase.initializeApp(config);

export const UserProfileDocument = async (userAuth, AdditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...AdditionalData
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(console.log);

export default firebase;
