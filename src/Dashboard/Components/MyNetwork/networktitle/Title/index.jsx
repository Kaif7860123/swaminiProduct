import React from "react";
import styles from "../index.module.css";
const Title = ({ title, allcom }) => {
  return (
    <>
      <div className={styles.direcmembercart2}>
        <div className={styles.direcmembercart}>
          <h2>{title}</h2>
        </div>
        {allcom}
      </div>
    </>
  );
};

export default Title;
