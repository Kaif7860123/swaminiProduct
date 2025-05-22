import React from "react";
import styles from "./index.module.css";
const Features = ({num,desc}) => {
  return (
    <>
      <div className={styles.homefeatures}>
        <span>{num}</span>
        <p>
          {" "}
         {desc}
        </p>
      </div>
    </>
  );
};

export default Features;
