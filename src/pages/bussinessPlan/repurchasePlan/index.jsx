import React from 'react'
import repurchase from '../../../assets/bussiness/Repurchase.png'
import BreadCrumb from '../../../components/breadCrumb'
import Plans from '../../../components/plans'
import styles from './index.module.css'
function RepurchasePlan() {
  return (
    <>
      <div className={styles.repurchaseplanCont}>
      <BreadCrumb h1="Opportunity" link="Home"para=".Awards & Rewards" />

        <Plans planType="Our Repurchase Plan" silverImg={repurchase}/>
        
      </div>
    </>
  )
}

export default RepurchasePlan
