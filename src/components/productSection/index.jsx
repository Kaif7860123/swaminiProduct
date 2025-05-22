import React from 'react'
import top19 from '../../assets//repurchaseproducts/top 19.jpg'
import styles from './index.module.css'
function ProductSection({text,text2,img,h1,h2,margin,text3,text4}) {
  return (
    <>
       <div className={styles.productSection}>
                  <div>
                  <img src={img} className={styles.productImg}/>
                  </div>
                  <p className={styles.heading}>{h1}</p>
                  <div className={styles.productDetails}>
                  <p className={styles.newlist}>{text}</p>
                  </div>
                  <p className={styles.newlist} style={{margin:margin}}>{text2}</p>
                  <p className={styles.heading}>{h2}</p>
                  {
                    (text=="Micromax fulfills the nutritional needs of the crop."||text3=="Mix 1 ml of King in 15 liters of water for use.")&&
                  <div className={styles.productDetails}>
                  <p className={styles.newlist}>{text3}</p>
                  </div>
                  }
                  <p className={styles.newlist} style={{margin:margin}}>{text4}</p>
                  </div>
    </>
  )
}

export default ProductSection
