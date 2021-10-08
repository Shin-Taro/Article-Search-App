import React from "react";
import PresetsDelete from "./PresetsDelete";

const Console = () => {
  const blockName = "console";
  const [tab, setTab] = useState("create");

  const toggleTabs = (e) => {
    const type = e.e.currentTarget.dataset.type;
    setTab(type);
  };

  return(
    <div className={blockName}>
      <button className={`${blockName}__btn`} type="button" onClick={() => props.onClick()}>X</button>
      <button className={`${blockName}__tabs`} type="button" data-type="create" onClick={(e) => toggleTabs(e)}>create</button>
      <button className={`${blockName}__tabs`} type="button" data-type="delete" onClick={(e) => toggleTabs(e)}>delete</button>
      <div className={`${blockName}__container`}>
        {type === "create" && <PresetsForm />}
        {type === "delete" && <PresetsDelete />}
      </div>
    </div>
  )
};

export default Console;