 import  React,{ useEffect, useState } from "react";
import styles from "./index.module.css";
 
function BankDetail() {
  const [bankdetails,setbankdetails] = useState([{bankName:"",accountNumber:"",accountType:"",branch:"",panNumber:"",ifscCode:""}]);
  useEffect(()=>{
    getbankdetails(localStorage.getItem("uid"));
  },[])
  const getbankdetails = async(id)=>{
    const res = await fetch("http://localhost:3000/api/v1/users/getbankdetails",{
      method:"POST",
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({
        userid:id
      })
    })
    const data = await res.json()
    console.log(data)
    setbankdetails([data.data])
  }
  return (
    <>
      <div className={styles.userDetail}>
        <p className={styles.content}>Bank Detail</p>
        <div className={styles.personalDetail}>
          <div className={styles.detail}>
            <p className={styles.key}>Bank Name</p>
            <p className={styles.value}>{bankdetails[0].bankName}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key}>Account No</p>
            <p className={styles.value}>{bankdetails[0].accountNumber}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key}>Account Type</p>
            <p className={styles.value}>{bankdetails[0].accountType}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key}>Branch</p>
            <p className={styles.value}>{bankdetails[0].branch}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key}>IFSC Code</p>
            <p className={styles.value}>{bankdetails[0].ifscCode}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key}>Pan Number</p>
            <p className={styles.value}>{bankdetails[0].panNumber}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BankDetail;
