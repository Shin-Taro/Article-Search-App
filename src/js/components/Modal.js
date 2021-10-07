import React from "react";

const Modal = props => {
  const blockName="modal";

  if(props.show){
    return(
      <div className={blockName}>
        <div className={`${blockName}__content`}>
          <h1 className={`${blockName}__titile`}>プレセットを追加</h1>
          <button className={`${blockName}__btn`} type="button" onClick={() => props.onClick()}>X</button>
        </div>
      </div>
    );
  }else{
    return null;
  }
};

export default Modal;