import React from "react";
import styles from "./index.module.css";
import green from '../assets copy/green-join.png'
const Open = () => {
  return (
    <>
      <div className={styles.hvitemchild}>
        <div className={styles.hvitem}>
          <div className={styles.hvitemparent}>
            <div className={styles.person}>
              <div className={styles.tooltip}>
                <div className={styles.imgcontainer}>
                  <img src={green} alt="parentpic" />
                </div>
              </div>
              <div className={styles.parentdetails}>
                <span>Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Open;
