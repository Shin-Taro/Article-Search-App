import React, { createContext, useContext } from "react";
import { useAuth } from "../firebase/index";

type User = {} | undefined;

const AuthContext = createContext<User>(undefined);

export const useAuthContext = () => useContext(AuthContext);

type Props = {
  children:React.ReactNode;
};

export const AuthProvider = ({children}:Props) => {
  const [user, initializing, error] = useAuth();
  const value = {user};

  if(initializing){
    return <p>Now initializing...</p>
  }else if (error){
    return <p>error:{error}</p>
  }else{
    return(
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }
};