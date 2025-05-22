import React from 'react'
import styles from "./index.module.css"
function Product({productImg,like,price,like2,btn,cart}) {
  return (
    <>
       
      <div className={styles.productSection}>
        <div>
          <img src={productImg} className={styles.mugImg}/>
        </div>
        <div className={styles.detailSection}>
          <p className={styles.like}>{like}</p>
          <p className={styles.price}>{price}</p>
          <p className={styles.like2}>{like2}</p>
          <button className={styles.btn}>{btn}<i>{cart}</i></button>
        </div>
      </div>
    
      
    </>
  )
}

export default Product
