import React from 'react'
import styles from './index.module.css'
import Container from '../../container'
import log from '../../assets/login1.avif'
import logo from '../../assets/logo.png'
import Field from '../../widgets/Inputs'
import { Link } from 'react-router-dom'
import LoginBtn from '../../widgets/Loginbtn'
const Registration = () => {
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
                <h2>Sign Up</h2>
                <div className={styles.formcontainer}>
                    <Field name="User Id"/>
                    <Field name="User Name"/>
                    <Field name="Email"/>
                    <Field name="Password"/>
                </div>
               <Link to="/forget_password"> <span>back to login ?</span></Link>
                <div className={styles.loginbtn}>
                    <LoginBtn name="Register"/>
                </div>
               <p className={styles.logincopyright}>© 2025 <a target='_blank' href="https://swamini.in">Swamini</a> </p>
            </div>
        </div>
      </Container>
      </div>
    </>
  )
}

export default Registration
