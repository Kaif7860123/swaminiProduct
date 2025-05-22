import React from "react";
import styles from "./index.module.css";
import BreadCrumb from "../../breadCrumb";
import { gallerydata } from "../../../data/gallerydata";

const Photos = () => {
  return (
    <>
      <BreadCrumb h1="Images" link="Home" para=".Images" />
      <div className={styles.photoscontainer}>
        {gallerydata.map(it=>{
          return <div key={it.id} className={styles.imgandcontentcontainer}>
          <div className={styles.imgcontainer}>
            <img src={it.pic} alt="celebratepics" />
          </div>
          <span>{it.title}</span>
        </div>
        })}
      </div>
    </>
  );
};

export default Photos;
