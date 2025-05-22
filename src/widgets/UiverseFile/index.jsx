import React from "react";
import styles from "./index.module.css";
const UploadFile = ({setreciept}) => {
  return (
    <>
      <label className={styles.custumfileupload} htmlFor="file">
        <input onChange={(e)=>setreciept(e.target.files[0])} type="file" id="file" />
      </label>
    </>
  );
};

export default UploadFile;
