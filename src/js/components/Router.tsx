import React from "react";
import { UserProvider } from "../context/UserContext";
import ArticleSearcher from "./ArticleSearcher";
import { useAuthContext } from "../context/AuthContext";
import SignIn from "./SignIn";

const Router = () => {
  const { user } = useAuthContext();

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