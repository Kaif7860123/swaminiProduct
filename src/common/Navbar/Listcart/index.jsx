import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
const Lists = ({ c, check, bg, name,onclick }) => {
  const jump=useNavigate()
const navigatePage=(link)=>{
jump(`/${link}`)
}
  return (
    <>
      {check && (
        <li onClick={onclick} style={{ color: c, backgroundColor: bg }} className={styles.lists}>
          {name}
        </li>
      )}
      {name == "Health Product" && (
        <li className={styles.lists}>
          {name}
          <ul className={styles.listlist}>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("moringa")}}>Moringa</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("noni")}}>Noni</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("sea_buckethran")}}>Sea Buckthron</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("soft_feel_napkin")}}>Softfeel Napkin</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("berries")}}>Berries</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("herba_veer")}}>Herba Veer</li>
          </ul>
        </li>
      )}
            {name == "Agri Products" && (
        <li className={styles.lists}>
          {name}
          <ul className={styles.listlist}>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("quaba_gold")}}>Quba Gold</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("tripple_action")}}>Tripal Action</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("top_might")}}>Top Might</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("top_blue_mixture")}}>Top Blue Mixture</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("top_80")}}>Top 80 Sticker</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("top_calbo")}}>Top Calbo</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("top_gaurd")}}>Top Gard</li>
            <li style={{color:"white"}} className={styles.lists} onClick={()=>{navigatePage("shubh_labh")}}>Subh-Labh</li>
          </ul>
        </li>
      )}
    </>
  );
};

export default Lists;
