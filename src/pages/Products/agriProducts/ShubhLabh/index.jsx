import React from 'react'
import AgreeProduct from '../../../../components/agreeProduct'
import shubhlabh from "../../../../assets/agreeProduct/subhlabh.png";
import styles from './index.module.css'
import { listData } from '../../../../data/listData';
function ShubhLabh() {
  return (
    <>
    <AgreeProduct img={shubhlabh}  h1="Agri Product" link="Home" para=".Shubh - Labh" agree="AGREE PRODUCTS" productName="Shubh"  
     productdetail="Shubh Benefits :"  list2="pH Balance:  " text4="Shubh balances the soil pH to 6-6.5, enhancing the absorption of nutrients, improving crop performance, yield, and stability." list3="Enhanced Nutrient Absorption:" 
     text5="Shubh increases the absorption of nutrients, strengthening plants against stress and promoting healthier crops."
                  list4="Promotes Stability: " 
                   text6="y enhancing the efficiency of nutrient absorption and reducing the impact of agricultural chemicals, Shubh contributes to stability, ensuring a sustainable future for green agriculture." sprayMethod=" Usage Instructions: " 
                   methodValue="Dilute 100-250 milliliters of Shubh in 200 liters of water. Mix it with agricultural chemicals, fertilizers, micronutrients, and biostimulants for robust plant growth."/>
       <div className={styles.labhCont}>
        <p className={styles.productName}>Labh</p>
                    <p className={styles.quaba}>Labh Benefits :</p>
        
                     <ul>
                      {
                        listData.map((item,i)=>{
                          return(
                    <li  className={styles.newlist} key={i}>
                     {item.list}
                      </li>
                          )
                        })
                      }
                      
                       
                     </ul>
                     <div className={styles.dosageCont}>
                                         <p className={styles.dosage}>Usage: </p>
                                         <p className={styles.takedosage}>
                                         Enhance plant health and nutrient absorption through foliar application. Dilute 100-250 milliliters of Labh Hydrogel in 200 liters of water and apply evenly on plant leaves.
                                         </p>
                                       </div>
       </div>
    </>
  )
}
 
export default ShubhLabh
