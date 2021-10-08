import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";

const PresetsDelete = () => {
  const blockName = "presetsDelete";
  const {user} = useAuthContext();
  const {presets} = useUserContext();
  const defList = presets.map((item) => {
    return(
      {
        id: item.id,
        name: item.name,
        selected: false,
      }
    );
  });
  const [list, setList] = useState(defList);

  const renderList = () => {
    const presetsList = list.map((item) => {
      return(
      <li key={item.id} className={`${blockName}__item`}>
        <button 
          className={`${blockName}__btn`} 
          type="button"
          data-id={item.id}
          data-selected={item.selected}
        >
          {item.name}
        </button>
      </li>
      );
    });
    return presetsList;
  };

  return(
    <div className={blockName}>
      <h1 className={`${blockName}__title`}>プリセットの削除</h1>
      <ul className={`${blockName}__list`}>
        {renderList()}
      </ul>
      <button className={`${blockName}__btn`} type="button">削除</button>
    </div>
  );
};

export default PresetsDelete;