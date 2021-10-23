import React from "react";

type Props = {
  renderItems:() => Content
}

const List = (props: Props) => {
  const blockName:string = "list";
  return(
      <ul className={blockName}>
        {props.renderItems()}
      </ul>
  );
};

export default List;