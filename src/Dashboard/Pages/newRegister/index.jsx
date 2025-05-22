import React, { useState } from 'react'
import Pagination from '../../shared/paginationheaders'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userdataActions } from '../../../Redux/Slices'
function NewRegister() {
  const transactionPass=useSelector(state=>state.userdata.transactionPassword)
  console.log("redux transaction:", transactionPass)
  const dispatch=useDispatch()
  // const[transactionPassword,setTransactionPass]=useState("")
  const navigate=useNavigate()
  const handleChange=async()=>{
      const userid=localStorage.getItem("uid")
      const res=await fetch("http://localhost:3000/api/v1/users/newRegister",{
        method:"post",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({userid,transactionPassword:transactionPass})
      })
      const data=await res.json()
      alert(data.msg)
      console.log(data)
      if(data.msg=="success"){
        navigate("/user/join_user")
        // const transactionPass=localStorage.setItem("transactionPass",transactionPassword)
        // console.log(transactionPass)
      }
      
       
}

  
  return (
    <>
        <Pagination name1= "New Register" />
        <div className={styles.transactionPassword}>
          <p className={styles.content}>VALIDATE TRANSACTION PASSWORD</p>
          <div className={styles.passwordCont}>
            <div>
          <p className={styles.text}><span className={styles.star}>*</span> TRANSACTION PASSWORD :</p>
          <input type='password' placeholder='ENTER TRANSACTION PASSWORD' onChange={(e)=>dispatch(userdataActions.setTransactionPass(e.target.value))} className={styles.inputField}/>
          </div>
          <p className={styles.proceed} onClick={handleChange}>PROCEED</p>
          </div>
        </div>
      
    </>
  )
}

export default NewRegister
