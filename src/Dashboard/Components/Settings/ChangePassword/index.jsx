import React from 'react'
import FormsComp from '../Forms'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import Swal from 'sweetalert2'
const ChangePassword = () => {
  const password=useSelector(state=>state.userdata.password)
  const newPass=useSelector(state=>state.userdata.newPassword)
  const confirmPass=useSelector(state=>state.userdata.confirmPassword)
    const [readcookie,createcookie,removecookie]=useCookies('')
  
  const handlePassword=async()=>{
    let userid=readcookie["userid"]
    const res=await fetch("http://localhost:3000/api/v1/users/updateUserDetail",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({password,newPass,confirmPass,userid})
    })
    const data=await res.json()
    // alert(data.msg)
    if(data.msg!="password updated succesfully"){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        
      });
      
    }
    else {
      Swal.fire({
        title: "updated successfully!",
        icon: "success",
        draggable: true
      });
    }
  }
  return (
    <>
    <FormsComp btn="Proceed" onclick={handlePassword} inp33="Re-Enter New Password:" inp3="Re-Enter New Password"  inp22="Enter New Password:" inp2="Enter New Password"  inp11="Enter Old Password:" inp1="Enter Old Password" title="Change Password" pagination1="Setting" pagination2="Change Password"/>
    </>
  )
}

export default ChangePassword
