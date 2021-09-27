import React from "react";

const Search = (props) => {
  const blockName = "search"
  return(
    <form className={blockName}>
      <input className={`${blockName}__text`} type="text" />
      <button className={`${blockName}__button`} type="submit">search</button>
    </form>
  );
};

export default Search;