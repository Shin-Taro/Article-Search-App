import React from "react";
import ArticleSearcher from "./components/ArticleSearcher";
import SignIn from "./components/Signin";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return(
    <AuthProvider>
      <ArticleSearcher />
      {/* <SignIn /> */}
    </AuthProvider>
  );
}

export default App;