// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyClafRHtUseUPzCByfOs_o79YohNiGDj8c',
  authDomain: 'jobflow-cfg-project.firebaseapp.com',
  projectId: 'jobflow-cfg-project',
  storageBucket: 'jobflow-cfg-project.appspot.com',
  messagingSenderId: '359805667230',
  appId: '1:359805667230:web:00c4fb3aaed3d3c40a788f',
  measurementId: 'G-G8JCDBQGL6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
