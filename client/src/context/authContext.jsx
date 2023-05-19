import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase.js";

// Create a Firebase context
const FirebaseContext = createContext();

// Firebase context provider component
const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{ currentUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };

// Custom hook to access the AuthContext
export const useAuth = () => useContext(FirebaseContext);
