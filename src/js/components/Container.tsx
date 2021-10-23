import React from "react";

type Props = {
  children: React.ReactNode
}

const Container = ({children}:Props) => {
  const blockName:string = "container";
  return(
    <div className={blockName}>
      {children}
    </div>
  );
};

export default Container;