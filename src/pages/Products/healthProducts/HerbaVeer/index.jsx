import React from 'react'
import berries from '../../../../assets/health/herbaveer.png'
import HealthProducts from '../../../../components/healthProducts'
function HerbaVeer() {
  return (
    <>
    <HealthProducts img={berries}  h1="Health Product" link="Home" para=".Herba Veer" health="HEALTH PRODUCTS" productName="Herba Veer" text1="A healthy sexual life is vital for your overall well-being. Herba Vir helps you in this regard."
                  healthBenefit="Health Benefits :" 
                  li1="It provides the strength to remain sexually active" li2="Helps reduce blood pressure"
                   li3="Helps to strengthen muscles" li4="Aids in burning calories"
                    li5="Helps to enhance energy and stamina" li6="Assists in treating depression"
                    li7="Reduces physical stress" li8="Helps to Promote hormonal balance"
                     dosage="Dosage : " takeDosage="Take one tablet in the morning and one in the evening."/>
     
  </>
  )
}

export default HerbaVeer
