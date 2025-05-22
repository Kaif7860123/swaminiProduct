import React from 'react'
import styles from './index.module.css'
import user from '../../assets/user.png'
import { VscMenu } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
const Header = ({handleclick,show,headerref}) => {
  const userdata = useSelector(state=>state.userdata.userdata)
  return (
    <>
     <div ref={headerref} className={styles.dashboardheadercontainer}>
        <div className={styles.leftdashboardcontainer}>
           
            <i onClick={handleclick}>
            <VscMenu size={30} color='gray'/>
                </i>
        </div>
        <div className={styles.rightdashboardheadercontainer}>
            <span>{userdata[0]?.name} ({ userdata[0]?.userid} )</span>
            <div className={styles.imgcontainer2}>
           <img src={user} alt="userpic" />
            </div>
        </div>
     </div>
    </>
  )
}

export default Header
