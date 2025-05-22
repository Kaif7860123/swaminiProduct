import React from "react";
import styles from "./index.module.css";
import parent from '../assets copy/yellow.png'
const Childs = ({name,id,children}) => {
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
                  <span>{id}</span>
                  <span>{name}</span>
                </div>
              </div>
            </div>
          </div>
           {children}
        </div>
    </>
  );
};

export default Childs;
