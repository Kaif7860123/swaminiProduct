import React from "react";
import styles from "./index.module.css";
import Field from "../../../widgets/Inputs";
const InputForm = ({name1,name2,value,onchange,handlechange}) => {
  return (
    <>
      <div className={styles.inputsform}>
        <label>
          <i style={{ color: "red" }}>*&nbsp;</i>{name2}
        </label>
        <Field name={name1} newValue={value} handlechange={handlechange} newOnchange={onchange}  />
      </div>
    </>
  );
};

export default InputForm;
