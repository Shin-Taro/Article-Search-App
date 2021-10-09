import React from "react";
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";
import { changeActive } from "../firebase";

const Presets = props => {
  const blockName = "presets";
  const {user} = useAuthContext();
  const {presets, loading} = useUserContext();

  const handleOnClick = e => {
    const prev = presets.find(v => v.isActive === true);
    const currentId = e.currentTarget.dataset.id;
    const target = presets.find(v => v.id === currentId);

    changeActive(user, prev, currentId);
    props.runPresets(target);
  };

  const renderPresets = () => {
    const list = presets.map((item) => {
      return(
      <li key={item.id} className={`${blockName}__item`}>
        <button 
          className={`${blockName}__btn`} 
          type="button"
          data-id={item.id}
          data-active={item.isActive}
          onClick={(e) => handleOnClick(e)}
        >
          {item.name}
        </button>
      </li>
      );
    });
    return list;
  };

  if(loading){
    return <p>Now loading your Presets...</p>
  }else{
    return(
      <div className={blockName}>
        <ul className={`${blockName}__list`}>
          {renderPresets()}
        </ul>
      </div>
    );
  }
};

export default Presets;