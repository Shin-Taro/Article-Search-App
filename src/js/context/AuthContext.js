import React, { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const value = {user, loading};

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log(user);
    });
    return () => {
      unsubscribed();
    }
  },[]);

  return(
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};