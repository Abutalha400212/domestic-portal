import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup
} from "firebase/auth";
import app from "../firebase/auth.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
const [loading,setLoading] = useState(true)
const GoogleProvider = new GoogleAuthProvider()

const googlePopup= ()=>{
  return signInWithPopup(auth, GoogleProvider)
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);
  const existUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name) => {
    setLoading(true)
    return updateProfile(auth.currentUser, name);
  };
  const logout =()=>{
    localStorage.removeItem('userToken')
    return signOut(auth)
  }
  const authInfo = {
    user,
    createUser,
    existUser,
    updateUserProfile,
    logout,
    setLoading,
    loading,
    googlePopup
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
