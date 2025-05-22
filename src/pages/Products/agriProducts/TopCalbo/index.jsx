import React from "react";
 
import topcalbo from "../../../../assets/agreeProduct/top calbo.png";
import HealthProducts from "../../../../components/healthProducts";
function TopCalbo() {
  return (
    <>
    <HealthProducts img={topcalbo} h1="Agri Product" link="Home" para=".TOP Calbo" health="AGRI PRODUCTS" productName="TOP Calbo"
                    healthBenefit="Top Calbo Benefits : :" 
                    li1="Top Calbo is a high-quality silicone-based spray agent. When applied to plants, the spray remains effective for extended periods." li2="Using Top Calbo with fertilizers, tonics, pesticides, and fungicides enhances their efficacy, providing farmers with greater benefits"
                     dosage="Usage: " takeDosage="Mix 250 ml of Top Calbo in 200 liters of water for application."/>
      
    </>
  );
}

export default TopCalbo;
