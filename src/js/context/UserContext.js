import React, { createContext, useContext } from "react";
import { useAuthContext } from "./AuthContext";

const UserContext = createContext();

export const useUserContext = useContext(UserContext);

export const UserProvider = ({children}) => {
  const { user } = useAuthContext();

  return(
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  );
};
