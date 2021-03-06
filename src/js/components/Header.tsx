import React, {useState} from "react";
import Modal from "./Modal";
import Console from "./Console";
import SignOut from "./SignOut";
import { useAuthContext } from "../context/AuthContext";
import { User } from '@firebase/auth/dist/auth-public'

const Header = () => {
  const blockName:string = "header";
  const [show, setShow] = useState<boolean>(false);
  const {user}:{user:User} = useAuthContext();

  const toggleModal = ():void => {
    setShow(!show);
  };

  return(
    <header className={blockName}>
      <h1 className={`${blockName}__title`}>
        Qiita<span className="hidden--sp"> Customized</span> App
      </h1>
      <p className={`${blockName}__user`}>ユーザー名：<br className="hidden--pc"/>{user.displayName? user.displayName : "ゲスト"}</p>
      <div className={`${blockName}__btns`}>
        <SignOut />
        <button className={`${blockName}__modal`}
        type="button"
        onClick={() => toggleModal()}>
          プリセット管理
        </button>
      </div>
        <Modal show={show} onClick={toggleModal} >
          <Console/>
        </Modal>
    </header>
  );
};

export default Header;