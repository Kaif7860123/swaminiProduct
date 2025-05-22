import React from 'react'
import styles from './index.module.css'
import Features from './Features'
import SectionTitle from '../SectionTitle'
const HomeFeatures = () => {
  return (
    <>
      <div className={styles.homefeaturecontainer}>
        <SectionTitle name="Key Features"/>
       <Features num= "01" desc="Sole company in India providing consistent daily payments for the past 6 years."/>
       <Features num= "02" desc="Unique and high-quality products with 100% results."/>
       <Features num= "03" desc="Assurance of excellent service from the payment department to every member."/>
       <Features num= "04" desc="24-hour e-commerce availability with rapid delivery."/>
       <Features num= "05" desc="Continuous support through dedicated customer service for each member."/>
       <Features num= "06" desc="Outstanding production and service management team."/>
       <Features num= "07" desc="Fastest-growing company in the MLM industry."/>
       <Features num= "08" desc="Swamini has expanded to all states in India."/>
       <Features num= "09" desc="24/7 availability of customer care."/>
       <Features num= "10" desc="Over 900,000+ happy and satisfied users."/>

     
      </div>
    </>
  )
}

export default HomeFeatures
