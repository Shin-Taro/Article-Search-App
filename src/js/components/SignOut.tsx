import React from "react";
import { logOut } from "../firebase";
import { useAuthContext } from "../context/AuthContext";

const SignOut = () => {
  const blockName:string = "signOut";
  const {user} = useAuthContext();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault();
    logOut(user);
  };

  return(
    <div className={blockName}>
      <button className={`${blockName}__btn`} type="button" onClick={(e) => handleOnClick(e)}>ログアウト</button>
    </div>
  );
};

export default SignOut;