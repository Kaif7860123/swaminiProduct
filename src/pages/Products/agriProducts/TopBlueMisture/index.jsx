import React from "react";
 
import bluemixture from "../../../../assets/agreeProduct/blue mixture.png";
import HealthProducts from "../../../../components/healthProducts";
function TopBlueMixture() {
  return (
    <>
    <HealthProducts img={bluemixture} h1="Agri Product" link="Home" para=".Top Blue Mixture" health="AGRI PRODUCTS" productName="Top Blue Mixture"
                    healthBenefit="Benefits :" component="Main Components:" 
                    li1="Top Blue Mixture protects crops from fungi and viral diseases that affect all types of crops." li2="It safeguards crops against fungi and other diseases."
                   margin="20px 0px"  li3="Chelated copper" li4="Yeast extract blend" dosage="Application:" takeDosage="Mix 250 ml of Top Blue Mixture in 200 liters of water and spray."/>
      
    </>
  );
}

export default TopBlueMixture;
