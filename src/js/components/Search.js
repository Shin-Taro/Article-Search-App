import React, {useState} from "react";

const Search = (props) => {
  const [value, setValue] = useState("");
  const blockName = "search";

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchArticles(value);
  }

  return(
    <form className={blockName} onSubmit={(e) => handleSubmit(e)}>
      <input className={`${blockName}__text`} type="text" value={value} onChange={(e) => handleChange(e)}/>
      <button className={`${blockName}__button`} type="submit">search</button>
    </form>
  );
};

export default Search;