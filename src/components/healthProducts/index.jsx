import React from 'react'
import BreadCrumb from '../breadCrumb'
import styles from './index.module.css'
import noni from "../../assets/health/noni.png";

function HealthProducts({img,h1,link,para,productName,margin,component,health,text1,text2,healthBenefit,li1,li2,li3,li4,li5,li6,li7,li8,li9,dosage,takeDosage}) {
  return (
    <>
      <div className={styles.noniCont}>
              <BreadCrumb h1={h1} link={link} para={para} />
              <div className={styles.noniBodyCont}>
                <div className={styles.imgCont}>
                  <img src={img} />
                </div>
                <div className={styles.medicineDetail}>
                  <p className={styles.healthBtn}>{health}</p>
                  <p className={styles.productName}>{productName}</p>
                  <p className={styles.text}>
                   {text1}
                  </p>
                  <p className={styles.text}>
                    {text2}
                  </p>
                  <p className={styles.benefits}>{healthBenefit}</p>
                  

                  <ul>
                    {
                      (para==".Top Blue Mixture"||para==".TOP 80 Sticker"||para==".TOP Calbo"||para==".TOP Gard")&&
                      <>
                      <li className={styles.list}>{li1}</li>
                      <li className={styles.list}>{li2}</li>
                      </>
                    }
                    {
                      (para==".Noni"||para==".Moringa"||para==".Herba Veer"||para==".Berries"||para==".Sea Buckthorn"||para==".Softfeel Napkin"||para==".TOP Might")&&
                      <>
                      <li className={styles.list}>{li1}</li>
                    <li className={styles.list}>{li2}</li>
                    <li className={styles.list}>{li3}</li>
                    <li className={styles.list}>{li4}</li>
                    </>
                    }
                    
                    {
                      para==".Moringa"&&<>
                    <li className={styles.list}>{li5}</li>
                    <li className={styles.list}>{li6}</li>
                    </>
                    }
                    {
                      para==".Softfeel Napkin"&&<>
                       <li className={styles.list}>{li5}</li>
                       <li className={styles.list}>{li6}</li>
                       <li className={styles.list}>{li7}</li>
                       <li className={styles.list}>{li8}</li>
                       <li className={styles.list}>{li9}</li>
                      </>
                    }
                    {
                      para==".Berries"&&
                      <>
                       <li className={styles.list}>{li5}</li>
                       <li className={styles.list}>{li6}</li>
                       <li className={styles.list}>{li7}</li>
                      </>
                    }
                    {
                      para==".Herba Veer"&&
                      <>
                       <li className={styles.list}>{li5}</li>
                       <li className={styles.list}>{li6}</li>
                       <li className={styles.list}>{li7}</li>
                       <li className={styles.list}>{li8}</li>
                      </>
                    }
                  </ul>
                  {
                   (para==".Top Blue Mixture"||para==".TOP Gard")&&
                 <div style={{margin:margin}}>
                  <p className={styles.benefits}>{component}</p>
                  <ul>
                  <li className={styles.list}>{li3}</li>
                  <li className={styles.list}>{li4}</li>
                  </ul>
                  </div>
                  }
                  <div className={styles.dosageCont}>
                    <p className={styles.dosage}>{dosage}</p>
                    <p className={styles.takedosage}>
                     {takeDosage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default HealthProducts
