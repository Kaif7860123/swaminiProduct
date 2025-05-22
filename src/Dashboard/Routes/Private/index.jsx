import React, { useEffect, useRef, useState } from "react";
import Header from "../../Common/Header";
import Sidemenu from "../../Common/Sidemenu";
import styles from "./index.module.css";
import Container from "../../Container";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { userdataActions } from "../../../Redux/Slices";
import Loader from "../../loader";
const Private = ({children}) => {
  const hideref = useRef(null);
  const headerref = useRef(null);
  const headerref2 = useRef(null);
  const [show, setshow] = useState(false);
  const handlesidemenu = () => {
    if (show) {
      hideref.current.style.width = "0px";
      hideref.current.style.transition = "0.5s ease";
      
      
    } else {
      hideref.current.style.width = "280px";
      hideref.current.style.transition = "0.5s ease";
      
      
    }
    setshow(!show);
  };

  let token;
  useEffect(()=>{
    token = localStorage.getItem('token');
   console.log(token," ",localStorage.getItem("uid"))
  },[])
  const jump = useNavigate()

  const [readcookie,createcookie,removecookie]=useCookies('')
  const dispatch = useDispatch()


    useEffect(()=>{
      if(!localStorage.getItem("uid")){
        jump('/login')
      }else{
        getuserdata(localStorage.getItem("uid"))
      }
    },[])
  
    const getuserdata = async(userid) =>{
      const res = await fetch("http://localhost:3000/api/v1/users/getuser",{
        method:"GET",
        headers:{"Content-Type":"Application/json"},
      });
      const data = await res.json()
      const filterdata = data.data.filter((item)=>item.userid==userid)
      if(filterdata.length<1){
        jump("/login")
      }
      dispatch(userdataActions.setuserdata(filterdata))
      console.log(filterdata)
    }
   const loader = useSelector(state=>state.userdata.loader)
  return (
    <>
    
    <Container>
      <div className={styles.privet}>
        
      {loader &&  <Loader/>}
      <div className={styles.privetcontainet}>
        <Sidemenu hideref={hideref} />
      </div>
      <div className={styles.privetpartcontainer}>
        <Header headerref={headerref} show={show} handleclick={handlesidemenu} />
       <div ref={headerref2} className={styles.chidrenconainet}>
        {children}
       </div>
      </div>
      </div>
      </Container>
      
    </>
  );
};

export default Private;
