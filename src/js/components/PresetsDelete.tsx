import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";
import { deletePresets } from "../firebase";
import { User } from '@firebase/auth/dist/auth-public'

const PresetsDelete = () => {
  const blockName:string = "presetsDelete";
  const {user}:{user:User} = useAuthContext();
  const {presets}:{presets: Preset[]} = useUserContext();
  const [list, setList] = useState<string[]>([]);

  const handleOnCheck = (e: React.MouseEvent<HTMLInputElement>):void | false => {
    const id :string | undefined = e.currentTarget.dataset.id;
    const tempList = list.slice();

    if(!id){
      return false;
    }else if(tempList.includes(id)){
      const newList = tempList.filter(item => item != id);
      setList(newList);
    }else{
      tempList.push(id);
      setList(tempList);
    }
  };

  const handleOnClick = ():void => {
    deletePresets(user, list);
    setList([]);
  };

  const renderList = ():JSX.Element[] => {
    const presetsList:JSX.Element[] = presets.map((item:Preset) => {
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
      <div className={`${blockName}__checkList`}>
        {renderList()}
      </div>
      <button className={`${blockName}__btn`} type="button" onClick={() => handleOnClick()}>削除</button>
    </div>
  );
};

export default PresetsDelete;