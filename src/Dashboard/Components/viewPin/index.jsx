import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import AdminTitltSection from '../AdminTitleSection'
import Tables from '../Tables'
import { userviewpinth } from '../../Data/UserTable/userviewpinth'
import { userviewpintddata } from '../../Data/UserTable/userviewpintd'
import Pagination from '../../shared/paginationheaders'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { userdataActions } from '../../../Redux/Slices'

const UserViewPin = () => {
  const [readcookie,createcookie,removecookie]=useCookies('')
  const userviewpindata = useSelector(state=>state.userdata.userviewpindata);
  const dispatch = useDispatch();
  useEffect(()=>{
    userviewpin(readcookie['userid'])
  },[])
  const userviewpin = async(readcookie)=>{
    const res = await fetch("http://localhost:3000/api/v1/admin/getissuepin",{
      method:"GET",
      headers:{"Content-Type":"Application/json"},
    })
    const data = await res.json()
    const filterdata = data.data.filter((item)=>item.userid==readcookie)
    console.log(filterdata)
    dispatch(userdataActions.setuserviewpindata(filterdata))
  }
  return (
    <>
        <Pagination  name2="View Pin" />

       <div className={styles.viewPinSection}>
    <AdminTitltSection title="Pin"/>
    <h1>Pin 3000</h1>
    <Tables thdata={userviewpinth} btn={false} tddata={userviewpindata}/>
       </div>
    </>
  )
}

export default UserViewPin
