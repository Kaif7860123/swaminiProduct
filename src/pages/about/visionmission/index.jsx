import React from 'react'
import styles from './index.module.css'
import BreadCrumb from '../../../components/breadCrumb'
import Swamini from '../../../components/breadCrumb/aboutSwamini'
import vision from "../../../assets/about/vision.png";
import mission from "../../../assets/about/mission.png";
import success from "../../../assets/about/succes.png";
import happy from "../../../assets/about/happy.jpg";
function VisionMission() {
  return (
    <>
      <div className={styles.visionMissionCont}>
      <BreadCrumb h1="Opportunity" link="Home"para=".Awards & Rewards" />

      <div className={styles.visionCont}>
      <Swamini  about="Vision" text1="Our vision is to create a world where individuals promptly receive payment for their work, have access to quality products, and are provided with the opportunity to earn millions with minimal investment. Our goal is to expand our network globally, enabling every individual to achieve economic independence and success through our innovative business model. We are committed to providing immediate financial benefits to our leaders, ensuring the highest quality of products, and fostering widespread prosperity by enhancing our global reach."
       moringa={happy} farming={vision} width="530px"/>
        
       <div className={styles.imgAndcontent}>
                              <div>
                           <img src={mission} className={styles.moringa}/>
                         </div>
                         <div className={styles.contentSection}>
                           <p className={styles.swamini}>Mission</p>
                           <p className={styles.text}>
                          "Our mission is to alleviate poverty, empower individuals with economic freedom and success, and promote economic equality within our nation. We operate as a social movement, inspiring people to become financially and socially empowered through products and services. Committed to advancing opportunities, we strive to foster social and economic improvement
                           so that every individual can achieve their full potential and progress towards prosperity.
                           </p>
                           
                           <img src={success} className={styles.farming} />
                         </div>
                        
                       </div>
      </div>
      </div>
    </>
  )
}

export default VisionMission
