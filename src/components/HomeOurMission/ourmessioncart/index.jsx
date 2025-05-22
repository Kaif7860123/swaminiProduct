import React from "react";
import styles from "./index.module.css";
const OurMissionCart = ({title,desc,bg}) => {
  return (
    <>
      <div style={{backgroundColor:bg}} className={styles.ourmissioncart}>
        <span>{title}</span>
        <p>
          {desc}
        </p>
      </div>
    </>
  );
};

export default OurMissionCart;
