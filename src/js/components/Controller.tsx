import React from "react";

type Props = {
  count:number
  onClick:(e: React.MouseEvent<HTMLButtonElement>) => void | false
}

const Controller = (props:Props) => {
  const blockName = "controller";

  return(
    <div className={blockName}>
      <button className={`${blockName}__arrow`} data-arrow="prev" onClick={(e) => props.onClick(e)}>＜</button>
      <span className={`${blockName}__count`}>{props.count}</span>
      <button className={`${blockName}__arrow`} data-arrow="next" onClick={(e) => props.onClick(e)}>＞</button>
    </div>
  );
};

export default Controller;