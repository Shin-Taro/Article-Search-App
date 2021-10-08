import React from "react";

const Modal = props => {
  const blockName="modal";

  if(props.show){
    return(
      <div className={blockName}>
        <div className={`${blockName}__content`}>
          {props.children}
        </div>
      </div>
    );
  }else{
    return null;
  }
};

export default Modal;