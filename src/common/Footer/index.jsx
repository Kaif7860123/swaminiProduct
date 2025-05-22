import React from 'react'
import styles from './index.module.css'
import logo from '../../assets/logo2.png'
import SolialIcon from '../../widgets/socialIcon'
import { CgFacebook } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Icons from '../../widgets/icons';
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import LocationList from '../../shared/locationlist';
import SocialIconcont from '../../shared/SocailContainer';
import Socialuivers from '../../widgets/SocialUivers';
import { socialdata } from '../../data/socialicon';

const Footer = () => {
  return (
    <>
      <div className={styles.footercontainer}>
       <div className={styles.topfootercontaier}>
        <div className={styles.footersocialcontainer}>
          <div className={styles.footerlogocontainer}>
            <img src={logo} alt="logopic" />
          </div>
          <p className={styles.socialpara}>We at Swamini take pride in achieving new heights of success with our unique inspiration and enthusiasm.</p>
         
          {/* <SocialIconcont/> */}
          <div>
            
          <Socialuivers data={socialdata}/>
          
          </div>
        </div>
        <div className={styles.footerlinkscontainer}>
          <span className={styles.linktitle}>Company</span>
          <ul className={styles.footerlist}>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>Home</span>
              </li>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>About US</span>
              </li>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>Opportunity</span>             
              </li>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>Video</span>
              </li>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>Contact US</span>
              </li>
          </ul>
        </div>
        <div className={styles.footerlinkscontainer}>
          <span className={styles.linktitle}>Products</span>
          <ul className={styles.footerlist}>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>Noni</span>
              </li>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>Moringa</span>
              </li>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>Quba Gold</span>             
              </li>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>Top Might</span>
              </li>
            <li className={styles.footeritems}>
              <i><IoIosArrowForward size={20}/></i>
              <span>Softfeel</span>
              </li>
          </ul>
        </div>
        <div className={styles.footerlinkscontainer}>
          <span className={styles.linktitle}>Contact</span>
         <p>Kadage Building, Near Post Office, Jaisingpur, Tal Shirol. Dist Kolhapur.</p>
  
         <LocationList icons={<FaLocationDot size={20} /> }  num="+Connect us"/>

         <LocationList icons={<MdCall size={20} />} num="+9552665266" />
        </div>
       </div>
       <div className={styles.bottomfootercontainer}>
        <span>Terms & Condition</span>
        <span>Privacy Policy</span>
       </div>
      </div>
    </>
  )
}

export default Footer
