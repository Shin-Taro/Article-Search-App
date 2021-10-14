import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { signIn } from "../firebase";
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const blockName:string = "signIn";
  const { user } = useAuthContext();

  if(!user){
    return(
      <div className={blockName}>
        <h1 className={`${blockName}__title`}>ログイン</h1>
        <button className={`${blockName}__btn`} type="button" onClick={() => signIn()}>
          Googleアカウントでログイン
        </button>
      </div>
    );
  }else{
    return <Redirect to="/" />;
  }
};

export default SignIn;