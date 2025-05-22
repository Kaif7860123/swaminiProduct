import React from "react";
import styles from "./index.module.css";
import parent from '../assets copy/yellow.png'
const Subchild = ({children}) => {
  return (
    <>
      <div className={styles.hvitemchild}>
        <div className={styles.hvitem}>
          <div className={styles.hvitemparent}>
            <div className={styles.person}>
              <div className={styles.tooltip}>
                <div className={styles.imgcontainer}>
                  <img src={parent} alt="parentpic" />
                </div>
              </div>
              <div className={styles.parentdetails}>
                <span>Open</span>
                <span>RANJEET SINGH YADAV</span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Subchild;
