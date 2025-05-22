import React from 'react'
import AgreeProduct from '../../../../components/agreeProduct'
import quaba from "../../../../assets/agreeProduct/quba.png";

function TrippleAction() {
  return (
    <>
    <AgreeProduct img={quaba}  h1="Agri Product" link="Home" para=".Triple Action" agree="AGREE PRODUCTS" productName="Triple Action" text1="Triple Action Swamini's unique and effective organic fertilizer that can be used on any type of crop at any stage. Its special components and benefits make it ideal for crop production" 
     productdetail="Benefits of Triple Action:"  list2=" More Branches, Flowers, and Fruits : " text4="Using Triple Action helps in the development of more branches in the crop, assists in the growth of more flowers and fruits, thereby increasing your yield." list3="Better Nutrient Availability :" 
     text5="This fertilizer enhances the availability of air and water to the crop, 
     providing essential nutrients in larger quantities, which improves its growth and development"
                  list4="Increase in Photosynthesis:" 
                   text6="Triple Action promotes the process of photosynthesis in the crop, 
                   increasing the plants' energy production capacity, making the crop greener and healthier." sprayMethod=" Spray Method:" methodValue=" Add 5 or 7 tablets of Triple Action in a 15/20 liter spray pump and spray."/>
       
    </>
  )
}

export default TrippleAction
