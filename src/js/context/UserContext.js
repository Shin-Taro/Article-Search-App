import React, { createContext, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { useDocOnce } from "../firebase";
import { Redirect } from 'react-router-dom';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}) => {
  const { user } = useAuthContext();
  
  if(!user){
    return <Redirect to="/signin" />;
  }else{
    const [userDoc] = useDocOnce("users", user.uid);
    console.log(userDoc);
    const value = {userDoc};
  
    return(
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  }

};
