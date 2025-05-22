import React from "react";
import styles from "./index.module.css";
const UpdateBTN = ({name}) => {
  return (
    <>
      <button className={styles.updateBTN}>
        <span className={styles.updatebtncircle1}></span>
        <span className={styles.updatebtncircle2}></span>
        <span className={styles.updatebtncircle3}></span>
        <span className={styles.updatebtncircle4}></span>
        <span className={styles.updatebtncircle5}></span>
        <span className={styles.updatebtntext}>{name}</span>
      </button>
    </>
  );
};

export default UpdateBTN;
