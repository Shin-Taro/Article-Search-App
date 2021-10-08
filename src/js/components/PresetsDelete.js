import React from "react";

const PresetsDelete = () => {
  const blockName = "presetsDelete";

  return(
    <div className={blockName}>
      <h1 className={`${blockName}__title`}>プリセットの削除</h1>
      <ul className={`${blockName}__list`}>

      </ul>
      <button className={`${blockName}__btn`} type="button">削除</button>
    </div>
  );
};

export default PresetsDelete;