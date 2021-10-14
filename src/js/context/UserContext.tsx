import React, { createContext, useContext, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { getUser, usePresetsData } from "../firebase";

const UserContext = createContext<any>(undefined);

export const useUserContext = () => useContext(UserContext);

type Props = {
  children:React.ReactNode;
};

export const UserProvider = ({children}:Props) => {
    const { user } = useAuthContext();
    const [presets, loading] = usePresetsData(user);
    const value = {presets, loading};
    console.log(presets);

    useEffect(() => {
      getUser(user);
    }, []);

    if(loading){
      return <p>Now loading</p>
    }else{
      return(
        <UserContext.Provider value={value}>
          {children}
        </UserContext.Provider>
      );
    }

};
