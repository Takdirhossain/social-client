import React, { useState, useEffect } from "react";
import { createContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const Allcontext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if(!storedUser){

    }
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    } 
  }, []);
  console.log(user);
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    return signOut(auth);
  };

;

  const authInfo = {
    user,
    setUser,
   
    signInWithGoogle,
    logout,
   
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Allcontext;
