import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Router from "./components/Router";

const App = () => (
  <AuthProvider>
    <Router/>
  </AuthProvider> 
);

export default App;