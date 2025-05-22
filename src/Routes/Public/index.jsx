import React, { useRef, useState } from 'react'
import styles from './index.module.css'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import { RxCross2 } from "react-icons/rx";
import logo from '../../assets/logo.png'
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import LocationList from '../../shared/locationlist';
import SocialIconcont from '../../shared/SocailContainer';
import { sidemenudata } from '../../data/sidemenuicondata';
import Socialuivers from '../../widgets/SocialUivers';
import Container from '../../container';
const Public = ({children}) => {
  const toggleref1 = useRef(null)
  const toggleref2 = useRef(null)
  const [toggle,settoggle] = useState(false)
  const handleclick = () => {
    if(toggle){
      toggleref2.current.style.width="400px"
      toggleref2.current.style.transition="0.25s ease"
       toggleref1.current.style.width="100%"
      toggleref1.current.style.transition="0s ease"
      toggleref1.current.style.height="100vh"


    }
    settoggle(true)
  }
  const handlecross=()=>{
    
    toggleref2.current.style.width="0px"
    toggleref2.current.style.transition="0.25s ease"
     toggleref1.current.style.width="0"
    toggleref1.current.style.transition="0s ease"
    // settoggle(!toggle)
  }
  return (
    <>
    <Container>
    <div className={styles.publiccontainer}>

    {toggle && <div ref={toggleref1} className={styles.sidebarcontainer}>
      <div ref={toggleref2} className={styles.sidebarmenuscontainer}>
        <div className={styles.sidemenus}>
          <div className={styles.crossandlogo}>
            <div className={styles.imglogo}>
            <img src={logo} alt="logo" />
            </div>
          <i onClick={handlecross} className={styles.cross}><RxCross2 size={20} /></i>
          </div>
          <div className={styles.contactinfocontainer}>
            <h2>Contact Info</h2>
         <LocationList islocation={true} icons={<FaLocationDot size={20} /> }  num="1 Kadage Building, Near Post Office, Jaisingpur."/>
         <LocationList islocation={true} icons={<MdCall size={20} /> } w="45px" num="+9552665266"/>
         <LocationList islocation={true} icons={<MdOutlineEmail size={20} /> } w="45px" num="swaminionline2018@gmail.com"/>
         <Socialuivers data={sidemenudata}/>
          </div>
        </div>
      </div>
     </div>}
      <Navbar handleclick={handleclick}/>
      {children}
      <Footer/>
    </div>
    </Container>
    </>
  )
}

export default Public
