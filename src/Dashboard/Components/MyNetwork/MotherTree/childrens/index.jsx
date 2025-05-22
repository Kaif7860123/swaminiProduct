import React from "react";
import styles from "./index.module.css";
const Childrens = ({children}) => {
  return (
    <>
      <div className={styles.hvitemchildren}>
      {children}
      </div>
    </>
  );
};

export default Childrens;
