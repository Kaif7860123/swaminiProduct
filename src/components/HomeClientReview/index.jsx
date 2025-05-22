import React from 'react'
import styles from './index.module.css'
import { FaRegStar, FaStar } from "react-icons/fa6";
import { LuQuote } from "react-icons/lu";
import { clientreviewdata } from '../../data/clientreviewdata';
const HomeClientReview = () => {
  return (
    <>
     {clientreviewdata.map(it=>{
        return  <div key={it.id} className={styles.homeclientreview}>
        <div className={styles.topreview}>
         <div className={styles.topleftreveiw}>
             <div className={styles.starcontainer}>
                 <i><FaStar size={20} color='#e8c54a'/></i>
                 <i><FaStar size={20} color='#e8c54a'/></i>
                 <i><FaStar size={20} color='#e8c54a'/></i>
                 <i><FaStar size={20} color='#e8c54a'/></i>
                 <i><FaRegStar  size={20} color='#e8c54a'/></i>
             </div>
             <h2 className={styles.name}>
                 {it.name}
             </h2>
             <span className={styles.titele}>
                 {it.location}
             </span>
         </div>
         <div className={styles.toprightreview}>
             <i><LuQuote size={60} color='#80b501' /></i>
         </div>
        </div>
        <div className={styles.bottomreview}>
         <p>{it.desc}</p>
        </div>
       </div>
     })}
    </>
  )
}

export default HomeClientReview
