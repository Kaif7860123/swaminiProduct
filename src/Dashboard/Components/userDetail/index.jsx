import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { detailData } from "../../Data/userSetailData";
function UserDetail() {
  const [userdetail, setuserdetail] = useState([{name:"",email:"",dob:"",gender:"",mobile:"",pan:"",pincard:"",streat:"",city:"",district:"",state:"",country:""}]);

  useEffect(()=>{
    getuserdetails(localStorage.getItem("uid"))
  },[])

  const getuserdetails = async (id) => {
    const res = await fetch(
      "http://localhost:3000/api/v1/users/getuserdetails",
      {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body:JSON.stringify({
          userid:id
        })
      }
    );
    const data = await res.json();
    setuserdetail([data.data]);
  };

  return (
    <>
      <div className={styles.userDetail}>
        <p className={styles.content}>Personal Detail</p>
        <div className={styles.personalDetail}>
          <div className={styles.detail}>
            <p className={styles.key} >
              Full Name
            </p>
            <p className={styles.value}>{userdetail[0]?.name}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            Email
            </p>
            <p className={styles.value}>{userdetail[0]?.email}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            Gender
            </p>
            <p className={styles.value}>{userdetail[0]?.gender}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            Date of Birth
            </p>
            <p className={styles.value}>{userdetail[0]?.dob?.slice(0,10)}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            Mobile No
            </p>
            <p className={styles.value}>{userdetail[0]?.mobile}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            PAN No
            </p>
            <p className={styles.value}>{userdetail[0]?.pan}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            Pincode
            </p>
            <p className={styles.value}>{userdetail[0]?.pincode}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            Address
            </p>
            <p className={styles.value}>{userdetail[0]?.streat}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            state
            </p>
            <p className={styles.value}>{userdetail[0]?.state}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            District
            </p>
            <p className={styles.value}>{userdetail[0]?.district}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.key} >
            city
            </p>
            <p className={styles.value}>{userdetail[0]?.city}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
