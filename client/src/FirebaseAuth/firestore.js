import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '../FirebaseAuth/firebaseConfig';

export const saveUserData = async (uid, userData) => {
  try {
    const userDocRef = doc(firestore, 'users', uid);
    await setDoc(userDocRef, userData);
    console.log('User data saved to Firestore');
  } catch (error) {
    console.error('Error saving user data to Firestore: ', error);
  }
};
