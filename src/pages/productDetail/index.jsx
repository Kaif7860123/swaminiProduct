import React from 'react'
import styles from './index.module.css'
import BreadCrumb from '../../components/breadCrumb'
import mug1 from '../../assets/markettingProduct/mug1.jpg'
import { FaShoppingCart } from "react-icons/fa";
import Product from '../../components/product';
function ProductDetail() {
  return (
    <>
      <div className={styles.detailcont}>
      <BreadCrumb h1="Product Details" link="Home"para="Product Details" />
<Product productImg={mug1} like="I Love Swamini Mug" price="₹ 500" like2="I Love Swamini Coffee Mug
    White color" btn="Buy Now" cart={<FaShoppingCart/>}/>
   
      </div>
    </>
  )
}

export default ProductDetail
