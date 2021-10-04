import React from "react";
import { signIn } from "../firebase";

const SignIn = () => {
  const blockName = "signIn";

  return(
    <div className={blockName}>
      <h1 className={`${blockName}__title`}>ログイン</h1>
      <button className={`${blockName}__btn`} type="button" onClick={() => signIn()}>
        Googleアカウントでログイン
      </button>
    </div>
  );
};

export default SignIn;