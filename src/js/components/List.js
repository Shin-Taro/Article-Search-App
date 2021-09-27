import React from "react";

const List = (props) => {
  const blockName = "list";
  return(
    <ul className={blockName}>
      <h1 className={`${blockName}__title`}>title</h1>
      <li className={`${blockName}__item`}>item</li>
    </ul>
  );
};

export default List;