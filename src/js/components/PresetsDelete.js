import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";
import { deletePresets } from "../firebase";

const PresetsDelete = () => {
  const blockName = "presetsDelete";
  const {user} = useAuthContext();
  const {presets} = useUserContext();
  const [list, setList] = useState([]);

  const handleOnCheck = (e) => {
    const id = e.currentTarget.dataset.id;
    const tempList = list.slice();

    if(tempList.includes(id)){
      const newList = tempList.filter(item => item != id);
      setList(newList);
    }else{
      tempList.push(id);
      setList(tempList);
    }
  };

  const handleOnClick = () => {
    deletePresets(user, list);
    setList([]);
  };

  const renderList = () => {
    const presetsList = presets.map((item) => {
      return(
        <label key={item.id} className={`${blockName}__item`}>
          <input
            className={`${blockName}__checkBox`} 
            type="checkbox"
            data-id={item.id}
            defaultChecked={list.includes(item.id)}
            onClick={(e) => handleOnCheck(e)}
          />
          {item.name}
        </label>
      );
    });
    return presetsList;
  };

  return(
    <div className={blockName}>
      <h1 className={`${blockName}__title`}>プリセットの削除</h1>
      {renderList()}
      <button className={`${blockName}__btn`} type="button" onClick={() => handleOnClick()}>削除</button>
    </div>
  );
};

export default PresetsDelete;