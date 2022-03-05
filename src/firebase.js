// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from '@firebase/firestore'




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Insert Your Firebase Info Here...",
  authDomain: "Insert Your Firebase Info Here...",
  projectId: "Insert Your Firebase Info Here...",
  storageBucket: "Insert Your Firebase Info Here...",
  messagingSenderId: "Insert Your Firebase Info Here...",
  appId: "Insert Your Firebase Info Here..."

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const reference to firestore
export const db = getFirestore(app)





// get all docs and print

// const snapshot = await db.collection('RandomPosts').get();
// snapshot.forEach((doc) => {
//   console.log(doc.id, '=>', doc.data());
// });