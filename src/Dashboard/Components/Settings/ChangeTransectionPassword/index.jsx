import React from 'react'
import FormsComp from '../Forms'
import { useSelector } from 'react-redux'

const ChangeTransectonPassword = () => {
  const password=useSelector(state=>state.userdata.password)
  const newPass=useSelector(state=>state.userdata.newPassword)
  const confirmPass=useSelector(state=>state.userdata.confirmPassword)
  const handleTransactionPass=async()=>{
    alert("clicked")
    const userid=localStorage.getItem("uid")
    console.log(userid)
    const re=await fetch("http://localhost:3000/api/v1/users/transactionPassword",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({password,newPass,confirmPass,userid})
    })
    const data=await re.json()
    alert(data.msg)
    console.log(data)
  }
  return (
    <>
    <FormsComp btn="Proceed" onclick={handleTransactionPass} inp33="Re-Enter New Transaction Password:" inp3="Re-Enter New Transaction Password"  inp22="Enter New Transaction Password:" inp2="Enter New Transaction Password"  inp11="Enter Old Transaction Password:" inp1="Enter Old Transaction Password" title="Change Transaction Password" pagination1="Setting" pagination2="Change Transaction Password"/>
      
    </>
  )
}

export default ChangeTransectonPassword
