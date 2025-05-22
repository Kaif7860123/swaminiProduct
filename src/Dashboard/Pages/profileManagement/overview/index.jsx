import React from "react";
import Pagination from "../../../shared/paginationheaders";
import styles from "./index.module.css";
import welcome from "../../../assets/profileManagement/welcome.gif";
import user from "../../../assets/dashboard/user.png";
import UserDetail from "../../../Components/userDetail";
import BankDetail from "../../../Components/BankDetail";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfileOverview() {
  const jump=useNavigate()
  const userdata = useSelector(state=>state.userdata.userdata)
  const changePage=(path)=>{
jump(`/${path}`)
  }
  return (
    <>
      <Pagination name1="Profile Management" name2="Profile" />
      <div className={styles.welcomeCont}>
        <div className={styles.gifCont}>
          <div className={styles.welcomeimgcon}>
          <img src={welcome} className={styles.welcomeImg} />
          </div>
          <div className={styles.profile}>
          <div className={styles.userimgcon}>
            <img src={user} className={styles.user} />
          </div>

            <p className={styles.name}>{userdata[0]?.name} ({userdata[0]?.userid})</p>
          </div>
        </div>
        <div className={styles.listCont}>
          <ul>
            <li onClick={()=>changePage("user/profile_overview")}>Overview</li>
            <li onClick={()=>changePage("user/my_profile")}>My Profile</li>
            <li onClick={()=>changePage("user/bank_detail")}>Bank Details</li>
          </ul>
        </div>
      </div>
      <div className={styles.userDetailCont}>
        <UserDetail/>
       <BankDetail/>
      </div>
    </>
  );
}

export default ProfileOverview;
