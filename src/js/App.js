import React from "react";
import ArticleSearcher from "./components/ArticleSearcher";
import SignIn from "./components/Signin";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route } from 'react-router-dom';
import { UserProvider } from "./context/UserContext";

const App = () => {
  return(
    <AuthProvider>
      <BrowserRouter>
        <UserProvider>
          <Route exact path="/" component={ArticleSearcher} />
        </UserProvider>
        <Route path="/signin" component={SignIn} />
      </BrowserRouter>
    </AuthProvider> 
  );
};

export default App;