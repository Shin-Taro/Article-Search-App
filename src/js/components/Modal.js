import React from "react";

const Modal = props => {
  const blockName="modal";

  if(props.show){
    return(
      <div className={blockName}>
        <div className={`${blockName}__content`}>
          <button className={`${blockName}__btn`} type="button" onClick={() => props.onClick()}>X</button>
          {props.children}
        </div>
      </div>
    );
  }else{
    return null;
  }
};

export default Modal;