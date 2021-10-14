import React from "react";
import { logOut } from "../firebase";
import { useHistory } from 'react-router-dom';

const SignOut = () => {
  const blockName:string = "signOut";
  const history = useHistory();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault();
    logOut();
    history.push("/signin");
  };

  return(
    <div className={blockName}>
      <button className={`${blockName}__btn`} type="button" onClick={(e) => handleOnClick(e)}>ログアウト</button>
    </div>
  );
};

export default SignOut;