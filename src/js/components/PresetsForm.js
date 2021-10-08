import React, { useState } from "react";

const PresetsForm = () => {
  const blockName = "presetsForm";
  const [values, setValues] = useState({
    id:"",
    name:"",
    query:"",
  });

  const handleOnChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]:value})
  };

  return(
    <form className={blockName}>
      <p>プリセットの名前</p>
      <input className={`${blockName}__text`} 
       type="text"
       name="name"
       value={values.name}
       placeholder="name"
       onChange={(e) => handleOnChange(e)} />

      <p>検索値</p>
      <input className={`${blockName}__text`}
      type="text"
      name="query"
      value={values.query}
      placeholder="query"
      onChange={(e) => handleOnChange(e)} />

      <button className={`${blockName}__btn`} type="submit">作成</button>
    </form>
  );
};

export default PresetsForm;