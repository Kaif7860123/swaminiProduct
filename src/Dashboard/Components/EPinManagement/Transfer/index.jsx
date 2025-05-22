import React, { useEffect, useState } from 'react'
import Pagination from '../../../shared/paginationheaders'
import styles from './index.module.css'
import InputForm from '../../Settings/formInput'
import LoginBtn from '../../../widgets/Loginbtn'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userdataActions } from '../../../../Redux/Slices'
import AdminTitltSection from '../../AdminTitleSection'
import SelectOption from '../../selectOption'
import InputBox from '../../inputBox'
import Button from '../../button'
import { useCookies } from 'react-cookie'
const Transfer = () => {
  const[msg,setmsg]=useState("")
  const[NumberOfPin,setNumberOfPin]=useState()
  const [transferPinUserid, setunderuserid] = useState("");
    // const [createuser, setcreateuser] = useState([]);
    // const [name, setname] = useState("");
    // const [userid, setuserid] = useState("");
    // const [data, setdata] = useState([
    //   { userid: "", sponsarName: "", under_userid: "" },
    // ]);
    // const[readcookie,createcookie,removecookie]=useCookies()
     
    const [userData, setuserData] = useState([]);
    let [matchedSponsorName, setmatchedSponsorName] = useState("");
    const userviewpindata = useSelector(state=>state.userdata.userviewpindata);
  
  const transactionPass=useSelector(state=>state.userdata.transactionPassword)
  console.log("redux transaction:", transactionPass)
  const dispatch=useDispatch()
  const handleChange=async()=>{
      const userid=localStorage.getItem("uid")
      const res=await fetch("http://localhost:3000/api/v1/users/newRegister",{
        method:"post",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({userid,transactionPassword:transactionPass})
      })
      const data=await res.json()
      alert(data.msg)
      setmsg(data.msg)
      console.log(data)
       
    }
    const handle = (value)=>{
      dispatch(userdataActions.setTransactionPass(value))
    }
    const getUser = async () => {
      alert("user called")
      console.log("get user")
      const re = await fetch("http://localhost:3000/api/v1/users/getuser", {
        method: "get",
        headers: { "content-type": "application/json" },
      });
      const data = await re.json();
      setuserData(data.data);
      console.log(data.data)
      // const filterdata = data.data.filter((it) => {
      //   return it.userid == readcookie["random"];
      // });
      // setcreateuser(filterdata);
    };
    const handleSponsorId = (e) => {
      setunderuserid(e.target.value);
      const matchedSponsor = userData.filter((item) => {
        return item.userid == e.target.value;
      });
      console.log(matchedSponsor);
      if (matchedSponsor.length == 0) {
        setmatchedSponsorName("sponsor name not found");
      } else {
        setunderuserid(matchedSponsor[0].userid);
        setmatchedSponsorName(matchedSponsor[0].name);
  
        console.log(matchedSponsor[0].name);
      }
    };
//     const getPins=async()=>{
//       alert("pin called")
// const re=await fetch("http://localhost:3000/api/v1/users/getUserPin",{
//   method:"post",
//   headers:{"content-type":"application/json"},
//   body:JSON.stringify({userid})
// })
// const data=await re.json()
// // alert(data.msg)
// console.log(data.user)
// setpins(data.user)
//     }
    const transferPin=async()=>{
    const getPinUserId=localStorage.getItem("uid")
console.log("get user pin id",getPinUserId)
const re=await fetch("http://localhost:3000/api/v1/users/transferPin",{
  method:"post",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({NumberOfPin,getPinUserId,transferPinUserid})
})
const data=await re.json()
alert(data.msg)
    }
    useEffect(()=>{
      // getPins()
      getUser()
    },[])
  return (
    <>
      <Pagination name1="E-Pin Management" name2="Transfer E-Pin"/>
      {
        msg!="success"?
        <div className={styles.epintransfercontainer}>
        <div className={styles.epititlecontainer}>
            <span>Fill the Following Details</span>
        </div>
        <div className={styles.epintdransferdetails}>
            <InputForm name1="Enter Transaction Password " name2="Transaction Password :" handlechange={handle}/>
                <LoginBtn name="Proceed" onclick={handleChange}/>
        </div>
      </div>
      :
      <div className={styles.joincontainer}>
        <AdminTitltSection title="Transfer e-pin" />

        <div className={styles.joinUserCont}>
          <div className={styles.inputUserSection}>
            <SelectOption
              para="Number of Pins"
              onchange={(e) => setNumberOfPin(e.target.value)}
              opt1="select a pin"
              opt2="1"
              opt3="2"
              opt4="4"
            />

            <InputBox
              para="Sponsor Id"
              type="text"
              onchange={(e) => handleSponsorId(e)}
              value={transferPinUserid}
            />
            <InputBox
              para="Sponsor Name"
              type="text"
              value={matchedSponsorName}
              readonly="readonly"
              onchange={(e) => setmatchedSponsorName(e.target.value)}
            />
            
            <Button value="Transfer Pin" content="left" clicked={transferPin}   />
          </div>
          </div>
          </div>
      }
      
    </>
  )
}

export default Transfer
