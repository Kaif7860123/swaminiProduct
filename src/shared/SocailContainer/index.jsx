import React from 'react'
import styles from './index.module.css'
import SolialIcon from '../../widgets/socialIcon'
import { CgFacebook } from 'react-icons/cg'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa6";
const SocialIconcont = ({color}) => {
  return (
    <>
      <div className={styles.socialiconscotainer}>
            <SolialIcon color={color} icon={<CgFacebook size={20}/>}/>
            <SolialIcon color={color} icon={<FaYoutube size={20}/>}/>
            <SolialIcon color={color} icon={<FaInstagram size={20}/>}/>
            {color && <SolialIcon color={color}  icon={<FaLinkedin size={20}/>}/>}
          </div>
    </>
  )
}

export default SocialIconcont
