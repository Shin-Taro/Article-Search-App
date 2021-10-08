import React, {useState} from "react";
import Modal from "./Modal";
import Console from "./Console";
import SignOut from "./SignOut";

const Header = () => {
  const blockName = "header";
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return(
    <header className={blockName}>
      <h1 className={`${blockName}__title`}>Qiita Customized App</h1>
      <SignOut />
      <button className={`${blockName}__modal`} type="button" onClick={() => toggleModal()}>プリセット管理</button>
        <Modal show={show} onClick={toggleModal} >
          <Console/>
        </Modal>
    </header>
  );
};

export default Header;