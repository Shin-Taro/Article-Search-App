import React from "react";
import { logOut } from "../firebase";

const SignOut = () => {
  const blockName = "SignOut";

  const handleOnClick = (e) => {
    e.preventDefault();
    logOut();
  }

  return(
    <div className={blockName}>
      <button className={`${blockName}__btn`} type="button" onClick={(e) => handleOnClick(e)}>ログアウト</button>
    </div>
  );
};

export default SignOut;