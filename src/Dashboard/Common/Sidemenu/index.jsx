import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import logopic from "../../assets/logo.jpg";
import { AiFillDashboard } from "react-icons/ai";
import { sidemenudata } from "../../Data/sidemenudata";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
const Sidemenu = ({ hideref }) => {
  const heightref = useRef(null);
  const transactionPass=useSelector(state=>state.userdata.transactionPassword)
  
  const [child,setchild]=useState("My Profile")
  const childnavigate = useNavigate()
  const userid=localStorage.getItem("uid")
  console.log("uid is :",userid)
 
  const handleheigiht1 = (e,name,namepath)=>{
    e.stopPropagation() 
    childnavigate(`/${namepath}`)
    setchild(name)
  }
  
  
  const [height, setheight] = useState("1.6rem");
  const [active,setactive]=useState("Dashboard")
  
  const [toggle,settoggle]=useState(true)
  const handleheigiht = (e,name1,ids,h) => {
    e.stopPropagation() 
    settoggle(!toggle)
    // setheight(h)
    if(name1=="Profile Management"){
      setactive(name1)
      if(document.getElementById(`${ids}`).style.height=="" || ((toggle || !toggle)&& document.getElementById(`${ids}`).style.height!="100px")){
        document.getElementById(`${ids}`).style.height = h
        document.getElementById(`${ids}`).style.transition = "0.5s ease"
        setheight(h)
      }else{
        document.getElementById(`${ids}`).style.height = "1.6rem"
          document.getElementById(`${ids}`).style.transition = "0.5s ease"
          setheight("1.6rem")
      }
    }else if(name1=="e-Pin Management"){
      setactive(name1)
      if(document.getElementById(`${ids}`).style.height=="" || ((toggle || !toggle) && document.getElementById(`${ids}`).style.height!="95px")){
        document.getElementById(`${ids}`).style.height = h
        document.getElementById(`${ids}`).style.transition = "0.5s ease"
        setheight(h)
      }else{
        document.getElementById(`${ids}`).style.height = "1.6rem"
          document.getElementById(`${ids}`).style.transition = "0.5s ease"
          setheight("1.6rem")
      }
    }else if(name1=="My Network"){
      setactive(name1)
      if(document.getElementById(`${ids}`).style.height=="" || ((toggle || !toggle) && document.getElementById(`${ids}`).style.height!="160px")){
        document.getElementById(`${ids}`).style.height = h
        document.getElementById(`${ids}`).style.transition = "0.5s ease"
        setheight(h)
      }else{
        document.getElementById(`${ids}`).style.height = "1.6rem"
          document.getElementById(`${ids}`).style.transition = "0.5s ease"
          setheight("1.6rem")
      }
    }else if(name1=="Reports"){
      setactive(name1)
      if(document.getElementById(`${ids}`).style.height=="" || ((toggle || !toggle) && document.getElementById(`${ids}`).style.height!="130px")){
        document.getElementById(`${ids}`).style.height = h
        document.getElementById(`${ids}`).style.transition = "0.5s ease"
        setheight(h)
      }else{
        document.getElementById(`${ids}`).style.height = "1.6rem"
          document.getElementById(`${ids}`).style.transition = "0.5s ease"
          setheight("1.6rem")
      }
    }else if(name1=="Daily Payout"){
      setactive(name1)
      if(document.getElementById(`${ids}`).style.height=="" || ((toggle || !toggle) && document.getElementById(`${ids}`).style.height!="131px")){
        document.getElementById(`${ids}`).style.height = h
        document.getElementById(`${ids}`).style.transition = "0.5s ease"
        setheight(h)
      }else{
        document.getElementById(`${ids}`).style.height = "1.6rem"
          document.getElementById(`${ids}`).style.transition = "0.5s ease"
          setheight("1.6rem")
      }
    }else if(name1=="Setting"){
      setactive(name1)
      if(document.getElementById(`${ids}`).style.height=="" || ((toggle || !toggle) && document.getElementById(`${ids}`).style.height!="101px")){
        document.getElementById(`${ids}`).style.height = h
        document.getElementById(`${ids}`).style.transition = "0.5s ease"
        setheight(h)
      }else{
        document.getElementById(`${ids}`).style.height = "1.6rem"
          document.getElementById(`${ids}`).style.transition = "0.5s ease"
          setheight("1.6rem")
      }
    }
  };
 
  const [readcookie,createcookie,removecookie]=useCookies('')
  const handlelist = (path,name)=>{
    setactive(name)
    if(path=="Logout"){
      removecookie("userid")
      localStorage.removeItem("uid")
      childnavigate("/login")
    }else{
      const randomTransactionPass=localStorage.getItem("transactionPass")
      console.log(randomTransactionPass)
      if(path=="user/join_user"&&randomTransactionPass!=transactionPass){
        childnavigate(`/user/New_Register `)
        alert("please enter transaction password")
      }
      else{

        childnavigate(`/${path}`)
      }

    }
     
  }
  return (
    <>
      <div ref={hideref} className={styles.sidemenucontainer}>
        <div className={styles.sidemenuheaderpiccontainet}>
          <div className={styles.imgcontainer}>
            {/* <img src={logopic} alt="logopic" /> */}
            <h2>BEGINNING STAR</h2>
          </div>
        </div>
        <div className={styles.sidemenulinkscontainer}>
          <ul>
            {sidemenudata.map((it,i) => {
              return it.logo ? (
                <li  className={active==it.name ? styles.list11: styles.list1} onClick={(e)=>handlelist(it.path,it.name)} key={it.id}>
                 {active==it.name?<i key={i}>{it.logo}</i>:<i>{it.logo}</i>} 
                  <span key={i}>{it.name}</span>
                </li>
              ) : (
                <>
                <div className={styles.listonecontainetr} id={it.ids} key={i}>

            <li ref={heightref}  className={it.name1==active  ? styles.list3:styles.list2} key={it.id}  onClick={(e)=>handleheigiht(e,it.name1,it.ids,it.h)}>
                <div className={styles.logoleftmenu}>
                <i key={i}>{it.logo1}</i>
                    <span key={i}>{it.name1}</span>
                </div> 
                { it.name1==active &&( toggle==false && height!="1.6rem" )? <i>{it.logo3}</i>:<i>{it.logo2}</i>} 
               
                </li>
             {it.sublist.map(it=>{
                return <li onClick={(e)=>handleheigiht1(e,it.name,it.namepath)} className={child==it.name ? styles.sublists1: styles.sublists} key={it.id}>{it.name}</li>
             })}
                </div>
              
                </>
            );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
