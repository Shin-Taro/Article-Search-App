import React, { createContext, useContext, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { getUser, useDocData, usePresetsData } from "../firebase";
import { Redirect } from 'react-router-dom';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}) => {
  const { user } = useAuthContext();

  if(!user){
    return <Redirect to="/signin" />;
  }else{
    const [presets, loading] = usePresetsData(user);
    const value = {presets, loading};
    console.log(presets);

    useEffect(() => {
      getUser(user);
    }, []);

    return(
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  }
};
