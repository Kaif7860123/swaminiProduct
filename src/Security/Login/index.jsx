import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import log from "../../assets/login1.avif";
import logo from "../../assets/logo.png";
import LoginBtn from "../../widgets/Loginbtn";
import Field from "../../widgets/Inputs";
import Socialuivers from "../../widgets/SocialUivers";
import { logindata } from "../../data/logindata";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../container";
import { useCookies } from 'react-cookie';
const Login = () => {
  const jump = useNavigate();
  const [leftcapcha,setleftcapcha]=useState("")
  const [rightcapcha,setrightcapcha]=useState("")
  const [total,settotal]=useState('')
  const [capcha,setcapcha]=useState('')
  const [readcookie,createcookie,removecookie]=useCookies('')
  useEffect(()=>{
    const left = Math.floor((Math.random()*30)+1)
    const right = Math.floor((Math.random()*30)+1)
    setleftcapcha(left);
    setrightcapcha(right)
    const result = left + right
    settotal(result)
    console.log(left,right,result)
  },[])
  const [userid, setuserid] = useState("");
  const [password, setpassword] = useState("");
  const handlesavedata = async () => {
    //capch checking
    console.log(capcha,total)
    //login user api
    if (userid == "" || password == "") {
     
      alert("All Fields Are Required");
    } else {
      if(capcha!=total){
        alert("Please Enter Correct Capcha")
      }else{

        const res = await fetch("http://localhost:3000/api/v1/users/login", {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({ userid: userid, password: password }),
        });
        const userdata = await res.json();
        console.log("login  data",userdata)
        if (!userdata.token) {
          alert("Invalid User");
        } else {
          localStorage.setItem("token", `Bearer ${userdata.token}`);
          localStorage.setItem("loggedUserId",userid);
        const transactionPass=localStorage.setItem("transactionPass",userdata.isExisting.transactionPassword)
          console.log(transactionPass)
          alert(userdata.msg);
          createcookie("userid",userid)
          localStorage.setItem("uid",userid)
           jump('/user')
        }
      }
    }
  };
  return (
    <>
      <div className={styles.logincontainerbanner}>
        <Container>
          <div className={styles.logincontainer}>
            <div className={styles.loginleftcontainer}>
              <img src={log} alt="loginpic" />
            </div>
            <div className={styles.loginrightcontainer}>
              <div className={styles.logopiclogin}>
                <img src={logo} alt="logopic" />
              </div>
              <h2>Sign In</h2>
              <div className={styles.formcontainer}>
                <Field typ="text" val={userid} username={setuserid} name="User Id" />
                <Field typ="password" val={password} username={setpassword} name="Password" />
              </div>
              <p>{leftcapcha} + {rightcapcha} =</p>
              <Field username={setcapcha} name="Enter Correct Answer" />
              <Link to="/forget_password">
                <span>Forget Password ?</span>
              </Link>
              <div className={styles.loginbtn}>
                <LoginBtn handleclick={handlesavedata} name="Login" />
                <Socialuivers data={logindata} />
              </div>
              <p className={styles.logincopyright}>
                © 2025{" "}
                <a target="_blank" href="https://swamini.in">
                  Swamini
                </a>{" "}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
