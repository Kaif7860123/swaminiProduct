import React from 'react'
import styles from './index.module.css'
import OurMissionCart from './ourmessioncart'
const HomeOurMission = () => {
  return (
    <>
      <div className={styles.homeourmissioncontainer}>
        <OurMissionCart title="Our Mission" bg="rgb(217, 243, 251)" desc='"Our vision is to create a world where individuals promptly receive payment for their work, have access to quality products, and are provided with the opportunity to earn millions with minimal investment. Our goal is to expand our network globally, enabling every individual to achieve economic independence and success through our innovative business model. We are committed to providing immediate financial benefits to our leaders, ensuring the highest quality of products, and fostering widespread prosperity by enhancing our global reach."'/>
        <OurMissionCart title="Our Vision" bg="rgb(255, 226, 229)" desc='""Our mission is to alleviate poverty, empower individuals with economic freedom and success, and promote economic equality within our nation. We operate as a social movement, inspiring people to become financially and socially empowered through products and services. Committed to advancing opportunities, we strive to foster social and economic improvement so that every individual can achieve their full potential and progress towards prosperity."'/>
        
      </div>
    </>
  )
}

export default HomeOurMission
