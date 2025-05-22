import React from "react";
import styles from "./index.module.css";
import parent from '../assets copy/yellow.png'
const Root = ({rootUser}) => {
  return (
    <>
      <div className={styles.hvitemparent}>
        <div className={styles.person}>
          <div className={styles.tooltip}>
            <div className={styles.imgcontainer}>
              <img src={parent} alt="parentpic" />
            </div>
          </div>
          <div className={styles.parentdetails}>
            <span>{rootUser[0]?.userid}</span>
            <span>{rootUser[0]?.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
