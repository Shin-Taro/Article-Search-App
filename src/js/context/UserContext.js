import React, { createContext, useContext } from "react";
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
    const docRef = getUser(user);
    const [userData] = useDocData(docRef);
    const [presets, loading] = usePresetsData(user);
    const value = {userData, presets, loading};
    console.log(presets);

    return(
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  }
};
