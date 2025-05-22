import React from 'react'
import HealthProducts from '../../../../components/healthProducts'
import seabuctheron from '../../../../assets/health/Seabuckthron.png'
function SeaBucktheran() {
  return (
    <>
      <HealthProducts img={seabuctheron}  h1="Health Product" link="Home" para=".Sea Buckthorn" health="HEALTH PRODUCTS" productName="Sea Buckthorn" text1="Sea buckthorn is a reservoir of nutrients and a unique product. The leaves, flowers, seeds, and fruits are used as medicine."
         text2="It is rich in antioxidants and contains abundant amounts of vitamin C, amino acids, beta-carotene, and protein." 
                    healthBenefit="Health Benefits :" 
                    li1="Strengthens the immune system" li2="Provides relief from cold and cough"
                     li3="Helpful in serious diseases like cancer" li4="Beneficial in diabetes management"  dosage="Dosage : " takeDosage="Take one tablet in the morning and one in the evening."/>
       
    </>
  )
}

export default SeaBucktheran
