import React from 'react'
import HealthProducts from '../../../../components/healthProducts'
import softfeel from '../../../../assets/health/Softfeel.png'

function SoftfeelNapkin() {
  return (
    <>
    <HealthProducts img={softfeel}  h1="Health Product" link="Home" para=".Softfeel Napkin" health="HEALTH PRODUCTS" productName="Softfeel Napkin" text1="SoftFeel napkins have six layers and an Anion chip, making them a product of excellent quality."
       
                  healthBenefit="Health Benefits :" 
                  li1="Controls irregular periods" li2="Treats rashes and cysts"
                   li3="Reduces itching" li4="Resolves fibroids" li5="Reduces uterine inflammation"
                   li6="Treats vaginal infections and UTIs"  li7="Reduces white and yellow discharge" 
                   li8="Alleviates infertility issues" li9="Lowers the risk of ovarian and cervical cancer"
                    />
     
  </>
  )
}

export default SoftfeelNapkin
