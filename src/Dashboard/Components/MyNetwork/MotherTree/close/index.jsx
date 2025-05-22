import React from "react";
import styles from "./index.module.css";
import red from '../assets copy/red-join.png'
const Close = () => {
  return (
    <>
      <div className={styles.hvitemchild}>
        <div className={styles.hvitem}>
          <div className={styles.hvitemparent}>
            <div className={styles.person}>
              <div className={styles.tooltip}>
                <div className={styles.imgcontainer}>
                  <img src={red} alt="parentpic" />
                </div>
              </div>
              <div className={styles.parentdetails}>
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Close;
