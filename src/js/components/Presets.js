import React, { useState } from "react";

const Presets = props => {
  const blockName = "presets";
  const defaultPresets = [
    {
      name: "新着",
      value: "created%3A%3E2021-08-01",
      isActive: true,
    },
    {
      name: "トレンド",
      value: "created%3A%3E2021-08-01+stocks%3A%3E10",
      isActive: false,
    },
  ];
  const [presets, setPresets] = useState(defaultPresets);

  const switchActive = target => {
    const list = presets.slice();
    const newList = list.map(item => {
      item.isActive = false;
      return item;
    });
    const index = newList.findIndex(({value}) => value === target);

    newList[index].isActive = true;
    return newList
  }

  const handleOnClick = e => {
    const list = presets.slice();
    const currentValue = e.currentTarget.dataset.value;
    const target = list.find(v => v.value ===currentValue);
    const newPresets = switchActive(currentValue);

    setPresets(newPresets);
    props.runPresets(target);
  }

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

  return(
    <div className={blockName}>
      <ul className={`${blockName}__list`}>
        {renderPresets()}
      </ul>
    </div>
  );
};

export default Presets;