import React from 'react'
import styles from './index.module.css'
import BreadCrumb from '../../../components/breadCrumb'
import Plans from '../../../components/plans'
import award from "../../../assets/bussiness/Awards.png";

function AwardReward() {
  return (
    <>
      <div className={styles.award}>
      <BreadCrumb h1="Opportunity" link="Home"para=".Awards & Rewards" />
        <Plans planType="Our Awards & Rewards" silverImg={award} height="700px"/>
        
      </div>
    </>
  )
}

export default AwardReward
