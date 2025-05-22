import React from "react";
import styles from "./index.module.css";
import BreadCrumb from "../../components/breadCrumb";
import mug from "../../assets/markettingProduct/mug.jpg";
import { LuShoppingBag } from "react-icons/lu";
import { productCard } from "../../data/productCardData";
import { useNavigate } from "react-router-dom";
function MarketingPrroduct() {
  const jump=useNavigate()
  const navigatePage=()=>{
jump("/product_detail")
  }
  return (
    <>
      <div className={styles.marketingproductCont}>
        <BreadCrumb h1="Products" link="Home" para=".Products" />
        <div className={styles.products}>
          {
productCard.map((item,i)=>{
  return(
    <div className={styles.card} key={i}>
            <div className={styles.product1}>
              <div className={styles.productImg}>
                <img src={item.productImg} className={styles.img}  />
              </div>
            </div>
            <div className={styles.productDetail}>
              <p className={styles.like} >{item.like}</p>
              <p className={styles.price} >{item.price}</p>
            </div>
            <div className={styles.iconCont}>
              <div className={styles.icons}>
              <i className={styles.shoppingIcon}  onClick={()=>navigatePage()}>
                {item.icon}
              </i>
            <span className={styles.view}  onClick={()=>navigatePage()}>{item.detail}</span>
            </div>
            </div>
          </div>
  )
})
          }
           
        </div>
      </div>
    </>
  );
}

export default MarketingPrroduct;
