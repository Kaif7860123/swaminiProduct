import React from 'react'
import styles from './index.module.css'

function Plans({planType,silverImg,height}) {
  return (
    <>
       <div className={styles.silverPlanSection}>
                <div className={styles.silverplan}>
                  <p className={styles.heading}>{planType}</p>
                  <div className={styles.planningImg}>
                    <img src={silverImg} style={{height:height}} />
                  </div>
                </div>
              </div>
    </>
  )
}

export default Plans
