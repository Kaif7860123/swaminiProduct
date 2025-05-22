import React from "react";
import styles from "./index.module.css";
import quaba from "../../assets/agreeProduct/quba.png";
import BreadCrumb from "../breadCrumb";
function AgreeProduct({img,h1,para,link,agree,productName,productdetail,text1,list1,text2,text3,list2,text4,list3,list4,text5,text6,ingredents,ingredentValue,howUse,drenching,drenchingValue,sprayMethod,methodValue}) {
  return (
    <>
      <div className={styles.quabaCont}>
<BreadCrumb h1={h1} link={link} para={para} />
        <div className={styles.noniBodyCont}>
          <div className={styles.imgCont}>
            <img src={img} />
          </div>
          <div className={styles.medicineDetail}>
            <p className={styles.healthBtn}>{agree}</p>
            <p className={styles.productName}>{productName}</p>
            <p className={styles.text}>
              {text1}
            </p>

            <p className={styles.quaba}>{productdetail}</p>
            {
              para==".Quba Gold"&& <ul>
              <li className={styles.quaba}>{list1}</li>
            </ul>
            }
           
            <p className={styles.list}>
              {text2}
            </p>
            <p className={styles.list}>
             {text3}
            </p>
            <ul>
              <li className={styles.quaba}>
               {list2}
                <p className={styles.newlist}>
                 {text4}
                </p>
              </li>
            </ul>
            <ul>
              <li className={styles.quaba}>
                {list3}
                <p className={styles.newlist}>
                  {text5}
                </p>
              </li>
            </ul>
            {
              (para==".Triple Action"||para==".Shubh - Labh")&&
              <ul>
              <li className={styles.quaba}>
                {list4}
                <p className={styles.newlist}>
                  {text6}
                </p>
              </li>
            </ul>
            }
            <p className={styles.quaba1}>
             {ingredents}
              <span className={styles.newlist}>
                {ingredentValue}
              </span>
            </p>
            <p className={styles.quaba}>{howUse}</p>
            <p className={styles.quaba}>
             {drenching}
              <span className={styles.newlist}>
                {drenchingValue}
              </span>
            </p>
            <p className={styles.quaba}>
             {sprayMethod}
              <span className={styles.newlist}>
               {methodValue}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgreeProduct;
