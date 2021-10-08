import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { addPreset } from "../firebase";

const PresetsForm = () => {
  const blockName = "presetsForm";
  const [values, setValues] = useState({id:"", name:"", query:""});
  const [message, setMessage] = useState("値を入力してください");
  const {user} = useAuthContext();

  const handleOnChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]:value})
  };

  const checkValues = () => {
    const name = values.name;
    const query = values.query;
    const nameReg = /^.{1,10}$/;
    const queryReg = /^.{1,1000}$/;
    const verifiedName = nameReg.test(name);
    const verifiedQuery = queryReg.test(query);

    if(!name || !query){
      return "項目が入力されていません";
    }else if(!verifiedName || !verifiedQuery){
      return "不正な入力です";
    }else{
      return true;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const result = checkValues();
    if(typeof(result) === "string"){
      setMessage(result);
    }else if(!result){
      console.log("false");
    }else{
      const escapedValue = encodeURIComponent(values.query);
      addPreset(user, values.name, escapedValue);
      setValues({id:"", name:"", query:""});
      setMessage("success!!");
    }
  }

  return(
    <form className={blockName} onSubmit={(e) => handleOnSubmit(e)}>
      <p>{message}</p>
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