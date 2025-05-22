import React from "react";
import styles from "./index.module.css";
const Field = ({name,val,username,typ}) => {
  return (
    <>
      <div className={styles.inputcontainer}>
        <input
        value={val}
        onChange={(e)=>username(e.target.value)}
        type={typ} 
          name="text"
          className={styles.input}
          placeholder={name}
        />
        <div className={styles.highlight}></div>
      </div>
    </>
  );
};

export default Field;
