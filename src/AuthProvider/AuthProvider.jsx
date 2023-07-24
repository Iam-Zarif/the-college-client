/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  
    const [loader, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const googleUser = new GoogleAuthProvider();
    const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleUser);
    };

    const updateUserInfo = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };


    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
      
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      };
    }, []);
    const userInfo = {
user,
googleSignIn,
updateUserInfo,
createUser,
logIn,
loader,
logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;