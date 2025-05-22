import React from 'react'
import styles from './index.module.css'
import pic from '../../assets/login1.avif'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'
import Field from '../../widgets/Inputs'
import LoginBtn from '../../widgets/Loginbtn'
import Container from '../../container'
const ForgetPassword = () => {
  return (
    <>
      <div className={styles.forgetpasswordbannercontainer}>
        <Container>
        <div className={styles.forgetpasswordcontainer}>
            <div className={styles.leftforgetpassword}>
                <img src={pic} alt="bannerpic" />
            </div>
            <div className={styles.rightforgetpassword}>
                <div className={styles.logopiclogin}>
                <img src={logo} alt="logopic" />
                </div>
                <h2>Forget Password ?</h2>
                <div className={styles.formcontainer}>
                    <Field name="User Id"/>
                </div>
               <Link to="/login"> <span>back to login</span></Link>
                <div className={styles.loginbtn}>
               <LoginBtn name="Get Password"/>
                </div>
            </div>
        </div>
        </Container>
      </div>
    </>
  )
}

export default ForgetPassword
