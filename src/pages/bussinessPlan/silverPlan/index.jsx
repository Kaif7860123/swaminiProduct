import React from "react";
import styles from "./index.module.css";
import BreadCrumb from "../../../components/breadCrumb";
import Plans from "../../../components/plans";
import silverImg from "../../../assets/bussiness/silver.png";

function SilverPlan() {
  return (
    <>
      <div className={styles.silverCont}>
      <BreadCrumb h1="Opportunity" link="Home"para=".Awards & Rewards" />

        <Plans planType="Our Silver Plan" silverImg={silverImg}/>
        
      </div>
    </>
  );
}

export default SilverPlan;
