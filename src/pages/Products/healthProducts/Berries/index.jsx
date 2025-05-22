import React from 'react'
import berries from '../../../../assets/health/Berry.png'
import HealthProducts from '../../../../components/healthProducts'

function Berries() {
  return (
    <>
    <HealthProducts img={berries}  h1="Health Product" link="Home" para=".Berries" health="HEALTH PRODUCTS" productName="Berries" text1="A comprehensive blend of natural herbs providing benefits in various deficiencies and diseases. Enzymes and biological components-rich berries offer immediate and sustained results, addressing various health issues in the human body."
       text2="They aid in digestion, blood sugar control, heart health, liver purification, immune support, and skin and hair care. We ensure the best natural source and acquisition of berries, guaranteeing the best of nature's goodness. The final result is comprehensive support." 
                  healthBenefit="Health Benefits :" 
                  li1="Promotes digestive and gut health" li2="Enhances stamina and energy levels"
                   li3="Controls blood pressure" li4="Supports liver purification"
                    li5="Acts as a tonic for the heart" li6="Renews all body cells"
                    li7="Aids in diabetes management"
                     dosage="Dosage : " takeDosage="Take one tablet in the morning and one in the evening."/>
     
  </>
  )
}

export default Berries
