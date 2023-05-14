// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbiTLT0dOu-UxYrxnDXWkQFa_99i1UGHM",
  authDomain: "cfg-job-tracker-74b5a.firebaseapp.com",
  projectId: "cfg-job-tracker-74b5a",
  storageBucket: "cfg-job-tracker-74b5a.appspot.com",
  messagingSenderId: "737559043775",
  appId: "1:737559043775:web:e0eab1877f46638c98700a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;