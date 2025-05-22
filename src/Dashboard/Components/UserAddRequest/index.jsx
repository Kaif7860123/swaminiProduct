import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { useraddrequestth } from '../../data/UserTable/useraddrequestth'
import qrcode from '../../assets/qrcode.webp'
import AdminTitltSection from '../AdminTitleSection'
import Tables from '../Tables'
import UploadFile from '../../../widgets/UiverseFile'
import { useDispatch, useSelector } from 'react-redux'
import { userdataActions } from '../../../Redux/Slices'
import { useCookies } from 'react-cookie'
const UserAddRequest = () => {
    const [userid,setuserid]=useState('')
    const [ammount,setammount]=useState('')
    const [utrno,setutrno]=useState('')
    const [reciept,setreciept]=useState(null)
    const [toggle,settoggle]=useState(false)
    const [readcookie,createcookie,removecookie]= useCookies()
    const dispatch = useDispatch()
    const handleAddAmmount=async()=>{
      const userid =  localStorage.getItem("uid")
        console.log(userid,ammount,utrno,reciept)
        if(userid==='' || ammount==='' || utrno==='' || reciept===null){
            alert("Please Fill All Fields")
            return
        }       
        settoggle(true)     
        try {
            const fdata = new FormData()
            fdata.append('reciept',reciept)
            fdata.append('ammountuserid',userid)
            fdata.append('ammount',ammount)
            fdata.append('utrnumber',utrno)
            const res = await fetch("http://localhost:3000/api/v1/users/addammount",{
                method:"POST",
                body:fdata,
            })
            settoggle(false)
            const data = await res.json()
            alert(data.msg)
            getaddammoutdata(userid)
        } catch (error) {
            console.log("Erorr",error.message)
        }
    }

 
     
 

    const ammountdata = useSelector((state)=>state.userdata.ammountdata) ;

    const getaddammoutdata = async(id) => {
        console.log("called")
        const res = await fetch("http://localhost:3000/api/v1/users/getammount",{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({ammountuserid:id})
        })
        const data = await res.json()
        console.log(data)
        dispatch(userdataActions.setammoutdata(data.data))
         
    
        console.log(ammountdata.length)
    }

    useEffect(()=>{
        const id=readcookie["userid"]
        console.log("cooki",id)
        getaddammoutdata(id)
    },[])
  return (
    <>
    <div className={styles.userrequestcontaienr}>
    {
        toggle && <div className={styles.loading}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
}
     <AdminTitltSection title="Add Ammount"/> 
     <div className={styles.useraddrequestcontainer}>
        <div className={styles.leftaddrequestform}>
            <div className={styles.inputfieldcontainer}>
            <div className={styles.inputfields}>
                <label>Userid</label>
                <input type="text" value={userid} onChange={(e)=>setuserid(e.target.value)} placeholder='Enter Userid' />
            </div>
            <div className={styles.inputfields}>
                <label>Ammount</label>
                <input type="number" value={ammount} onChange={(e)=>setammount(e.target.value)} placeholder='Enter Ammount' />
            </div>
            </div>
            <div className={styles.inputfieldcontainer}>
            <div className={styles.inputfields}>
                <label>UTR No.</label>
                <input type="number" value={utrno} max="12" onChange={(e)=>setutrno(e.target.value)} placeholder='Enter UTR Number' />
            </div>
            <div className={styles.inputfields}>
                <label style={{display:"block"}}>Upload Receipt</label>
                <UploadFile setreciept={setreciept}/>
            </div>
            </div>
            <div className={styles.btncontainer}>
                <button className={styles.button} onClick={handleAddAmmount}>Submit</button>
            </div>
        </div>
        <div className={styles.rightqrcodecontainer}>
            <div className={styles.qrcodeimg}>
                <img src={qrcode} alt="qr code pic" />
            </div>
        </div>
     </div>
     <Tables
        thdata={useraddrequestth}
        tddata={ammountdata}
        btn={true}
        c="rgb(252, 194, 21)"
        />
        </div>
    </>
  )
}

export default UserAddRequest
