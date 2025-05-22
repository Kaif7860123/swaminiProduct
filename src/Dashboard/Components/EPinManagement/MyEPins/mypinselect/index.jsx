import React from "react";
import styles from "./index.module.css";
const MyPicSelect = ({third,disp,gp,col}) => {
  return (
    <>
      <div className={styles.mypinselsectform} style={{display:disp,gridTemplateColumns:col,columnGap:gp}}>
        <div className={styles.firstselect}>
            <label>Transfer Type:</label>
        <select>
          <option value="select package">--Select Package--</option>
          <option value="Agriculture Products">Agriculture Products</option>
          <option value="Heakth Care Products">Heakth Care Products</option>
          <option value="Sanitary Napkin">Sanitary Napkin</option>
          <option value="EXCECUTIVE WATCH">EXCECUTIVE WATCH</option>
        </select>
        </div>
        <div className={styles.firstselect}>
        <label> Status:</label>
        <select>
          <option value="select status">--Select Status--</option>
          <option value="Available">Available</option>
          <option value="used">used</option>
          <option value="Transferred">Transferred</option>
        </select>
        </div>
     {third &&   <div className={styles.firstselect}>
        <label>Select Packege:</label>
        <select>
          <option value="select status">--Select Status--</option>
          <option value="Available">Available</option>
          <option value="used">used</option>
          <option value="Transferred">Transferred</option>
        </select>
        </div>
}
      </div>
    </>
  );
};

export default MyPicSelect;
