import React from 'react'
import styles from './index.module.css'
import moringa from "../../../assets/about/moringa.png";
import farming from "../../../assets/about/farming.jpg";
function Swamini({welcome,about,text1,text2,moringa,farming,width}) {
  return (
    <>
      <div className={styles.imgAndcontent}>
                  <div className={styles.contentSection}>
                    <p className={styles.welcome}>{welcome}</p>
                    <p className={styles.swamini}>{about}</p>
                    <p className={styles.text}>
                     {text1}
                    </p>
                    <p className={styles.text}>
                      {text2}
                    </p>
                    <img src={farming} className={styles.farming} />
                  </div>
                  <div>
                    <img src={moringa} className={styles.moringa} style={{width:width}} />
                  </div>
                </div>
    </>
  )
}

export default Swamini
