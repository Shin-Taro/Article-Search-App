import React from "react";
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";
import { changeActive } from "../firebase";
import { User } from '@firebase/auth/dist/auth-public'

type Props = {
  runPresets:(preset:Preset) => void
};

const Presets = (props: Props) => {
  const blockName:string = "presets";
  const {user}:{user:User} = useAuthContext();
  const {presets, loading}:{presets: Preset[]; loading: boolean;} = useUserContext();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>):void | false => {
    const prev = presets.find(v => v.isActive === true);
    const currentId = e.currentTarget.dataset.id;
    const target = presets.find(v => v.id === currentId);

    if(!currentId || !target){
      return false;
    }
    changeActive(user, prev, currentId);
    props.runPresets(target);
  };

  const renderPresets = ():JSX.Element[] => {
    const list:JSX.Element[] = (presets || []).map((item) => {
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