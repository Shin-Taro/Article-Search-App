import React, {useState} from "react";

type Props = {
  searchArticles:(value:string) => void
};

const Search = (props:Props) => {
  const [value, setValue] = useState<string>("");
  const blockName:string = "search";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const value = e.target.value;
    setValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
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