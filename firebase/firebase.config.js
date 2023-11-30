import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD5JHI2voKBcdqUPitYNGHef7wg8eaOiR8",
  authDomain: "coder-first-next-app.firebaseapp.com",
  projectId: "coder-first-next-app",
  storageBucket: "coder-first-next-app.appspot.com",
  messagingSenderId: "482073414013",
  appId: "1:482073414013:web:c2cd6f551edf4aa9be6414"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)