import React from "react";

const List = (props) => {
  const blockName = "list";
  return(
      <ul className={blockName}>
        {props.renderItems()}
      </ul>
  );
};

export default List;