import React from 'react'
import HealthProducts from '../../../../components/healthProducts'
import moringa from "../../../../assets/health/Moringa.png";

function Moringa() {
  return (
    <>
       <HealthProducts img={moringa}  h1="Health Product" link="Home" para=".Moringa" health="HEALTH PRODUCTS" productName="Moringa" text1="Moringa helps in alleviating blood pressure problems.
        The Moringa tree is sometimes called the tree of life for its supposed ability to 
        reduce pain and the risk of heart disease, ulcers, and other chronic health conditions."
         text2="It is rich in calcium, vitamin C, vitamin B6,
          potassium, and magnesium. Moringa supports liver health and is also used in face packs." 
                    healthBenefit="Health Benefits :" 
                    li1="Controls blood pressure" li2="Improves liver health"
                     li3="Provides relief in asthma" li4="Manages diabetes" li5="Aids in weight loss" li6="Useful for sexual power and menopause" dosage="Dosage : " takeDosage="Take one tablet in the morning and one in the evening."/>
      
    </>
  )
}

export default Moringa
