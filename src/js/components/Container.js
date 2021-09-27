import React from "react";

const Container = ({children}) => {
  const blockName = "container";
  return(
    <div className={blockName}>
      {children}
    </div>
  );
};

export default Container;