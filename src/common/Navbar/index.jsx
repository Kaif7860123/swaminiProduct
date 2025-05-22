import React from 'react'
import styles from './index.module.css'
import { VscMenu } from "react-icons/vsc";
import logo from '../../assets/logo.png'
// import { ListCollectionsCursor } from 'mongodb';
import Lists from './Listcart';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../container';
const Navbar = ({handleclick}) => {
  const navigatelink= useNavigate()
  const handenavigate=(name)=>{
    navigatelink(`/${name}`)
  }
  return (
    <>
    
      <div className={styles.navbarcontaier}>
        <div className={styles.leftnavbarlogocontainer}>
          <div className={styles.logopicconainer}>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className={styles.middlenavbarlistcontainer}>
          <ul>
            <li onClick={()=>handenavigate("")}  name="home" >Home
           
            </li>
            <li>About
            <div className={styles.navlistlink}>
              <ul className={styles.navlistlinks}>
                <Lists onclick={()=>handenavigate("about_company")} check={"true"} name="About Company"/>
                <Lists onclick={()=>handenavigate("vision_mission")} check={"true"} name="Vision & Mission"/>
                <Lists onclick={()=>handenavigate("key_features")} check={"true"} name="Key Features"/>
              </ul>
            </div>
            </li>
            <li>Bussiness Plan
            <div className={styles.navlistlink}>
              <ul className={styles.navlistlinks}>
                <Lists onclick={()=>handenavigate("silver_plan")}  check={"true"} name="Silver Plan"/>
                <Lists onclick={()=>handenavigate("gold_plan")} check={"true"} name="Gold Plan"/>
                <Lists onclick={()=>handenavigate("repurchase_plan")} check={"true"} name="Repurchase Plane"/>
                <Lists onclick={()=>handenavigate("award_reward")} check={"true"} name="Awards & Rewards"/>
              </ul>
            </div>
            </li>
            <li>Products
            <div className={styles.navlistlink}>
              <ul className={styles.navlistlinks}>
                <Lists   name="Health Product" />
                <Lists  name="Agri Products" />
                <Lists   onclick={()=>handenavigate("repurchase_product")} name="Repurchase Products" check={"true"}/>
              </ul>
            </div>
            </li>
            <li>Gallery
            <div className={styles.navlistlink}>
              <ul className={styles.navlistlinks}>
                <Lists onclick={()=>handenavigate("videos")} check={"true"} name="Videos"/>
                <Lists onclick={()=>handenavigate("photos")} check={"true"} name="Photos"/>
              </ul>
            </div>
            </li>
            <li>Download
            <div className={styles.navlistlink}>
              <ul className={styles.navlistlinks}>
                <Lists check={"true"} name="English Brochure"/>
                <Lists check={"true"} name="Hindi Brochure"/>
                <Lists check={"true"} name="Kannada Brochure"/>
                <Lists check={"true"} name="Women Brochure"/>
                <Lists check={"true"} name="Flyer"/>
                <Lists check={"true"} name="Bussiness Plan"/>
                <Lists check={"true"} name="Magazine"/>
              </ul>
            </div>
            </li>
            <li onClick={()=>handenavigate("marketing_product")}>Marketing Products</li>
            <li>Legal Documents</li>
            <li onClick={()=>handenavigate("contact")}>Contact</li>
           <Link target='_blank' to="/login"><li >Login</li></Link>
          </ul>
        </div>
        <div className={styles.rightnavbartogglecontainer}>
          <i onClick={handleclick}><VscMenu size={40}/></i>
        </div>
       
      </div>
    </>
  )
}

export default Navbar
