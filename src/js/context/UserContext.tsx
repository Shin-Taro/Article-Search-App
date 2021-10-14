import React, { createContext, useContext, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { getUser, usePresetsData } from "../firebase";
import { Redirect } from 'react-router-dom';

const UserContext = createContext<any>(undefined);

export const useUserContext = () => useContext(UserContext);

type Props = {
  children:React.ReactNode;
};

export const UserProvider = ({children}:Props) => {
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
