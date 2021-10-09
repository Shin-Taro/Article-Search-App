import React, {useState} from "react";
import Modal from "./Modal";
import Console from "./Console";
import SignOut from "./SignOut";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {
  const blockName = "header";
  const [show, setShow] = useState(false);
  const {user} = useAuthContext();

  const toggleModal = () => {
    setShow(!show);
  };

  return(
    <header className={blockName}>
      <h1 className={`${blockName}__title`}>Qiita Customized App</h1>
      <p className={`${blockName}__user`}>ユーザー名：{user.displayName}</p>
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