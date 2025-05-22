import React from "react";
 
import noni from "../../../../assets/health/noni.png";
import HealthProducts from "../../../../components/healthProducts";
function NoniHealth() {
  return (
    <>
    <HealthProducts img={noni} h1="Health Product" link="Home" para=".Noni" health="HEALTH PRODUCTS" productName="Noni" text1="Noni has been used for thousands of years as a medicinal plant. It
                    is a natural specialist medicine that keeps the skin healthy,
                    provides energy to the body, and eliminates weakness." text2="Noni is rich in vitamins B1, B2, B3, B6, and B12. Additionally, it
                    is abundant in calcium, potassium, magnesium, and phosphorus." 
                    healthBenefit="Health Benefits :" 
                    li1="Liver protection" li2="Heart protection"
                     li3="Beneficial in rheumatism" li4="Supportive in diabetes" dosage="Dosage : " takeDosage="Take one tablet in the morning and one in the evening."/>
      
    </>
  );
}

export default NoniHealth;
