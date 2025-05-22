import React from 'react'
import styles from './index.module.css'
import BreadCrumb from '../../../components/breadCrumb'
import Plans from '../../../components/plans'
import goldImg from "../../../assets/bussiness/gold.png";

function GoldPlan() {
  return (
    <>
      <div className={styles.goldplanCont}>
      <BreadCrumb h1="Opportunity" link="Home"para=".Awards & Rewards" />

        <Plans planType="Our Gold Plan" silverImg={goldImg}/>
        
      </div>
    </>
  )
}

export default GoldPlan
