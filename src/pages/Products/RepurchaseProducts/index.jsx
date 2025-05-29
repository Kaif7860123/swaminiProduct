import React, { useState } from 'react'
import BreadCrumb from '../../../components/breadCrumb'
import top19 from '../../../assets//repurchaseproducts/top 19.jpg'
import top61 from '../../../assets//repurchaseproducts/Top-61.jpg'
import top52 from '../../../assets//repurchaseproducts/Top-52.jpg'
import top23 from '../../../assets//repurchaseproducts/Top_23.jpg'
import top26 from '../../../assets//repurchaseproducts/Top_26.jpg'
import top50 from '../../../assets//repurchaseproducts/Top-50.jpg'
import topmacromax from '../../../assets//repurchaseproducts/Top Micromax.jpg'
import styles from './index.module.css'
import ProductSection from '../../../components/productSection'
function RepurchaseProduct() {
  const[active,setactive]=useState("TOP NPK")
  const handleactive=(e)=>{
    console.log(e)
setactive(e)
  }
  return (
    <>
      <BreadCrumb h1="Repurchase Product" link="Home"para=".Repurchase Action" />
      <div className={styles.repurchaseBody}>
        <div className={styles.optionSection}>
          
        <p className={active=="TOP NPK"?styles.active:styles.product} onClick={()=>handleactive("TOP NPK")}>TOP NPK</p>
        <p className={active=="TOP 19"?styles.active:styles.product} onClick={()=>handleactive("TOP 19")}>TOP 19</p>

           <p className={active=="TOP 61"?styles.active:styles.product} onClick={()=>handleactive("TOP 61")}>TOP 61</p>
          <p  className={active=="TOP 52"?styles.active:styles.product} onClick={()=>handleactive("TOP 52")}>TOP 52</p>
          <p className={active=="TOP 23"?styles.active:styles.product} onClick={()=>handleactive("TOP 23")}>TOP 23</p>
          <p className={active=="TOP 50"?styles.active:styles.product} onClick={()=>handleactive("TOP 50")}>TOP 50</p>
          <p className={active=="TOP 26"?styles.active:styles.product} onClick={()=>handleactive("TOP 26")}>TOP 26</p>
          <div  className={active=="TOP MICROMAX"?styles.active:styles.product} onClick={()=>handleactive("TOP MICROMAX")}> 

          <p>TOP MICROMAX</p>
          </div>

          <p className={active=="KING"?styles.active:styles.product} onClick={()=>handleactive("KING")}>KING</p>
          
        </div>
        {
          active=="TOP NPK"&&
          <div className={styles.productSection}>
          <ul>
           
            <li className={styles.newlist}>Top NPK fertilizer is made from organic manure. It contains a high amount of organic carbon.</li>
          <li className={styles.newlist}>This fertilizer contains essential nutrients required for every crop.</li>
          <li className={styles.newlist}>It can be used at any stage of any crop.</li>
          <li className={styles.newlist}>It helps in promoting crop growth, leading to more flowers and fruits.</li>
          </ul>
        </div>
        }
        {
          active=="TOP 19"&&
          <ProductSection text="This is a balanced fertilizer that can be used on any crop at any stage." img={top19}/>
           
        }
        {
          active=="TOP 61"&&
          <ProductSection text="Top 61 contains a high amount of phosphorus, which promotes plant growth. This results in an increased number of white roots." img={top61}/>
           
        }
        {
          active=="TOP 52"&&
          <ProductSection text="Top 52 contains both phosphorus and potassium, which make the fruits and flowers healthier."
          text2="It works by providing essential components to the soil." img={top52}/>
           
        }
         {
          active=="TOP 23"&&
          <ProductSection text="This fertilizer provides essential nitrogen to the plants."
          text2="After using TOP 23, plant growth is significantly enhanced." img={top23}/>
           
        }
         {
          active=="TOP 50"&&
          <ProductSection text="Top 50 contains a high amount of potassium, which is essential during the maturity stage of crops."
          text2="After using Top 50, flowers and fruits develop better color. It also helps increase the weight and taste of fruits and seeds." img={top50}/>
           
        }
        {
          active=="TOP 26"&&
          <ProductSection text="It contains nitrogen, phosphorus, and potassium. It can be used on vegetables such as chilies, eggplants, tomatoes, cabbage, cucumbers, etc., to achieve higher yields."
           img={top26}/>
           
        }
       {
          active=="TOP MICROMAX"&&
          <ProductSection text="Micromax fulfills the nutritional needs of the crop."
          text2="Micromax contains 1000 PPM of micronutrients." text3="Mix 500 ml of Micromax in 200 liters of water for use."
          text4="By using Top Micromax correctly, you can provide your crops with the necessary nutrients and enhance their productivity." h1="Benefits:"img={topmacromax} h2="Usage Instructions:" margin="15px 0px"/>
           
        }
         {
          active=="KING"&&
          <ProductSection text="King is a growth promoter. It contains essential components that promote the growth of flowers, plants, and fruits."
            text3="Mix 1 ml of King in 15 liters of water for use."
           h1="Benefits:"img={topmacromax} h2="Usage Instructions:" margin="15px 0px"/>
           
        }
      </div>
    </>
  )
}

export default RepurchaseProduct
