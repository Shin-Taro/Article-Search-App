import React from "react";

const Controller = props => {
  const blockName = "controller";

  return(
    <div className={blockName}>
      <button className={`${blockName}__arrow`}>＜</button>
      <span className={`${blockName}__count`}>{props.count}</span>
      <button className={`${blockName}__arrow`}>＞</button>
    </div>
  );
};

export default Controller;