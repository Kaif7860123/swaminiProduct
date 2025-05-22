import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { FaUserFriends } from "react-icons/fa";
import { cardData } from "../../Data/dashboardCardData";
import profileBack from "../../assets/dashboard/profile-back.jpg";
import user from "../../assets/dashboard/user.png";
import { CiMobile1 } from "react-icons/ci";
import insta from '../../assets/dashboard/insta.png'
import facebook from '../../assets/dashboard/facebook.png'
import whatsapp from '../../assets/dashboard/whatsapp.png'
import youTube from '../../assets/dashboard/youtube.png'
import Socialuivers from "../../Components/socialUiverse";
import { logindata } from "../../Data/messageData";
import { userCardData } from "../../Data/userCardData";

import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
  const [check, setcheck] = useState(false);
  const [data, setData] = useState("");

 const userdata =  useSelector(state=>state.userdata.userdata)
  const loadData = (item) => {
    if (item == "Total Team") {
      setcheck(true);
      setData(item);
    } else if (item == "Silver Binary") {
      setcheck(true);
      setData(item);
    } else if (item == "Gold Binary") {
      setcheck(true);
      setData(item);
    } else if (item == "Total Direct") {
      setcheck(true);
      setData(item);
    }
  };
 
  return (
    <div className={styles.dashboardCont}>
      <div className={styles.cardCont}>
        {cardData.map((item, i) => {
          return (
            <div
              className={styles.card}
              style={{ backgroundColor: item.bgColor }}
              key={i}
            >
              <div className={styles.cardDetail}>
                <div className={styles.iconCont}>
                  <i >{item.icon}</i>
                </div>
                <div className={styles.text}>
                  <p className={styles.team} >
                    {item.team}
                  </p>
                  <p
                    className={styles.view}
                    
                    onClick={() => loadData(item.team)}
                  >
                    {data == item.team ? (
                      <>
                        {" "}
                        <p className={styles.totalTeam}>{item.left}</p>
                        <p className={styles.totalTeam}>{item.right}</p>
                      </>
                    ) : (
                      item.view
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.usercardCont}>
          {userCardData.map((item, i) => (
            <div
              className={styles.usercard}
              style={{ backgroundColor: item.bg1 }}
              key={i}
            >
              <p style={{ backgroundColor: item.bg2 }} >
                {item.text}
              </p>
              <div className={styles.usercardFooter}>
                <i >{item.icon}</i>
                <span >{item.span}</span>
              </div>
              {item.text == "Total Team" && (
                <span className={styles.totalTeam}>Left: 13 | Right:5</span>
              )}
            </div>
          ))}
        </div>

      <div className={styles.cycleCont}>
        <div className={styles.cycleHistory}>
          <p className={styles.content}>LAST CYCLE HISTORY (SILVER)</p>

          <div className={styles.details}>
            <p>Date</p>
            <p>Cycle</p>
            <p>Match</p>
            <p>Capping</p>
          </div>
        </div>
        <div className={styles.cycleHistory}>
          <p className={styles.content}>AVAILABLE E-PINS</p>

          <div className={styles.details}>
            <p>Package Name</p>
            <p>E-Pins</p>
          </div>
        </div>
      </div>
      <div className={styles.profileCont}>
        <div className={styles.profileDetail}>
          <div className={styles.imgCont}>
            <img src={profileBack} className={styles.profileImg} />
          </div>

          <div className={styles.userDetail}>
            <p>Name : {userdata[0]?.name}</p>
            <p>User ID : {userdata[0]?.userid}</p>
            <p>Mobile No. : {userdata[0]?.mobile}</p>
            <p>Email ID :{userdata[0]?.email}</p>
            <p>Activation Date :{userdata[0]?.joiningDate}</p>
            <div>
            <img src={user} className={styles.user}/>
          </div>
          </div>
          <div className={styles.btnCont}>
            <p className={styles.btn}>My Profile</p>
            <p className={styles.btn}>Visit my website</p>
          </div>
          
        </div>
        <div className={styles.profileDetail}>
          <p className={styles.content}>INSIGHT SWAMINI</p>
        </div>
      </div>
      <div className={styles.messageCont}>
        <div className={styles.messageSection}>
        <p className={styles.content}>MESSAGE</p>
        <div className={styles.messageOption}>
          <p>Follow The Links for Daily Updates.</p>
          <Socialuivers data={logindata}/>

           
        </div>
        </div>
         
      </div>
    </div>
  );
};

export default Dashboard;
