import React from "react";
import styles from './index.module.css'
function Button({value,content,clicked}) {
   
  return (
    <>
      <div className={styles.updateBtn} style={{justifyContent:content}}>
        <p className={styles.updateProfile} onClick={clicked}>{value}</p>
      </div>
    </>
  );
}

export default Button;
