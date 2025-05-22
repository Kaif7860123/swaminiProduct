import React from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userdataActions } from "../../../Redux/Slices";
const Field = ({name,newValue,newOnchange,handlechange}) => {
  const password=useSelector(state=>state.userdata.password)
     
    const dispatch=useDispatch()
    console.log((newValue))
  return (
    <>
      <div className={styles.inputcontainer}>
        <input
          type="text"
          name="text"
          className={styles.input}
          placeholder={name}
          value={newValue}
          onChange={(e)=>handlechange(e.target.value)}
          
        />
        <div className={styles.highlight}></div>
      </div>
    </>
  );
};

export default Field;
