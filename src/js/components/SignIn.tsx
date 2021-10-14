import React from "react";
import { signIn, signInAnony } from "../firebase";

const SignIn = () => {
  const blockName:string = "signIn";

  return(
    <div className={blockName}>
      <h1 className={`${blockName}__title`}>ログイン</h1>
      <button className={`${blockName}__btn`} type="button" onClick={() => signIn()}>
        Googleアカウントでログイン
      </button>
      <button className={`${blockName}__btn`} type="button" onClick={() => signInAnony()}>
        ゲストで始める
      </button>
    </div>
  );

};

export default SignIn;