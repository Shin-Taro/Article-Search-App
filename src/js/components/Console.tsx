import React, { useState } from "react";
import PresetsForm from "./PresetsForm";
import PresetsDelete from "./PresetsDelete";

const Console = () => {
  const blockName:string = "console";
  const [tab, setTab] = useState<string | undefined>("create");

  const toggleTabs = (e: React.MouseEvent<HTMLButtonElement>):void => {
    const type:string | undefined = e.currentTarget.dataset.type;
    setTab(type);
  };

  return(
    <div className={blockName}>
      <div className={`${blockName}__tabList`}>
        <button className={`${blockName}__tab`}
          type="button"
          data-type="create"
          data-active={tab === "create"}
          onClick={(e) => toggleTabs(e)}>
            create
        </button>
        <button className={`${blockName}__tab`}
          type="button"
          data-type="delete"
          data-active={tab === "delete"}
          onClick={(e) => toggleTabs(e)}>
            delete
        </button>
      </div>
      <div className={`${blockName}__container`}>
        {tab === "create" && <PresetsForm />}
        {tab === "delete" && <PresetsDelete />}
      </div>
    </div>
  )
};

export default Console;