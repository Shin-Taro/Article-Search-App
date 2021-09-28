import React from "react";

const Header = () => {
  const blockName = "header";

  return(
    <header className={blockName}>
      <h1 className={`${blockName}__title`}>Qiita Customized App</h1>
    </header>
  );
};

export default Header;