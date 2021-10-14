import React from "react";
import { logOut } from "../firebase";

const SignOut = () => {
  const blockName:string = "signOut";

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault();
    logOut();
  };

  return(
    <div className={blockName}>
      <button className={`${blockName}__btn`} type="button" onClick={(e) => handleOnClick(e)}>ログアウト</button>
    </div>
  );
};

export default SignOut;