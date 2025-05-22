import React from 'react'
import styles from './index.module.css'
import pic from '../../assets/home/about.jpg'
const HomeAboutCompany = () => {
  return (
    <>
     <div className={styles.homeaboutcompanycontainer}>
        <div className={styles.leftdetailscontainier}>
            <span>About Company</span>
            <h2>Welcome to Swamini Family</h2>
            <p>We at Swamini take pride in achieving new heights of success with our unique inspiration and enthusiasm. Under the leadership of Sunil Khot sir, our team has established a recognizable presence in the competitive market and surpassed the standards of excellence. As part of our mission, we are committed to propelling individuals towards financial independence and success through Swamini.</p>
             <p>Our inspiration and energy drive Swamini towards constant excellence. Our enthusiasm provides us with the strength to overcome every challenge and instills positivity and confidence in our interactions. We are dedicated and capable in our work, always striving to serve our customers consistently.</p>
             <p>Since our establishment in 2017, we have adhered to the values of reliability, quality, and responsiveness. We proudly affirm that our company has remained resilient in managing its operations and maintained the trust of our customers through outstanding performance.</p>
             <h3>By joining Swamini, you are inspired to a successful and prosperous future. Thank you.</h3>
        </div>
        <div className={styles.rightdetailscontainer}>
            <img src={pic} alt="aboutpic" />
        </div>
    </div> 
    </>
  )
}

export default HomeAboutCompany
