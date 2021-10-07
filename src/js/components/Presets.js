import React from "react";
import { useUserContext } from "../context/UserContext";

const Presets = props => {
  const blockName = "presets";
  const {presets, loading} = useUserContext();

  // const switchActive = target => {
  //   const list = presets.slice();
  //   const newList = list.map(item => {
  //     item.isActive = false;
  //     return item;
  //   });
  //   const index = newList.findIndex(({value}) => value === target);

  //   newList[index].isActive = true;
  //   return newList
  // }

  // const handleOnClick = e => {
    // const list = presets.slice();
    // const currentValue = e.currentTarget.dataset.value;
    // const target = list.find(v => v.value ===currentValue);
    // const newPresets = switchActive(currentValue);

    // setPresets(newPresets);
    // props.runPresets(target);
  // }

  const renderPresets = () => {
    const list = presets.map((item, index) => {
      return(
      <li key={item.value + index} className={`${blockName}__item`}>
        <button 
          className={`${blockName}__btn`} 
          type="button"
          data-value={item.value}
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