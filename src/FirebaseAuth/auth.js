import { createUserWithEmailAndPassword as firebaseCreateUser } from 'firebase/auth';
import { auth } from '../FirebaseAuth/firebaseConfig';
import { saveUserData } from './firestore';

export const createUserWithEmailAndPassword = async (
  email,
  password,
  userData
) => {
  try {
    const userCredential = await firebaseCreateUser(auth, email, password);
    console.log('User signed up: ', userCredential.user);

    // Save user data to Cloud Firestore
    await saveUserData(userCredential.user.uid, userData);

    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Error signing up: ', error);
    return { success: false, error };
  }
};
