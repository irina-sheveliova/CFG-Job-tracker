import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase.js";

const FirebaseContext = createContext();
const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

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
