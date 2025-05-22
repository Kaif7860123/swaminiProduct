import React from "react";
import styles from "./index.module.css";
const Wrapper = ({children}) => {
  return (
    <>
      <div className={styles.hvwraper}>
        <div className={styles.hvitem}>
            {children}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
