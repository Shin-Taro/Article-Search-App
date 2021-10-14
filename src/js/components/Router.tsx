import React from "react";
import { UserProvider } from "../context/UserContext";
import ArticleSearcher from "./ArticleSearcher";
import { useAuthContext } from "../context/AuthContext";
import SignIn from "./SignIn";
import { User } from '@firebase/auth/dist/auth-public'

const Router = () => {
  const { user }:{user:User | undefined} = useAuthContext();

  if(!user){
    return <SignIn/>;
  }else{
    return (
    <UserProvider>
      <ArticleSearcher/>
    </UserProvider>
    );
  }
};

export default Router;