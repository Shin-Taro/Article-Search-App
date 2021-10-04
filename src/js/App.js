import React from "react";
import ArticleSearcher from "./components/ArticleSearcher";
import SignIn from "./components/Signin";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return(
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" component={ArticleSearcher} />
        <Route path="/signin" component={SignIn} />
      </BrowserRouter>
    </AuthProvider> 
  );
};

export default App;