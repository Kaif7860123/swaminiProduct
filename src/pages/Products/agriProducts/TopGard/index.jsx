import React from "react";
 
import topgard from "../../../../assets/agreeProduct/top guard.png";
import HealthProducts from "../../../../components/healthProducts";
function TopGaurd() {
  return (
    <>
    <HealthProducts img={topgard} h1="Agri Product" link="Home" para=".TOP Gard" health="AGRI PRODUCTS" productName="TOP Gard"
                    healthBenefit="Top Gard Benefits :" component="Main Components:" 
                    li1="Helps in preventing damage from high-quality biostimulant agents against harmful insects." li2="Enhances the resistance capacity of flowers, fruits, and plants."
                   margin="20px 0px"  li3="Plant extracts" li4="cow urine" dosage="Application:" takeDosage="Mix 250 ml of Top Blue Mixture in 200 liters of water and spray."/>
      
    </>
  );
}

export default TopGaurd;
