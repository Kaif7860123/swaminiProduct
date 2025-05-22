import React from 'react'
import LoginBtn from '../../../widgets/Loginbtn'
import InputForm from '../formInput'
import Pagination from '../../../shared/paginationheaders'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { userdataActions } from '../../../../Redux/Slices'
const FormsComp = ({pagination1,pagination2,title,inp1,inp11,btn,inp2,inp22,inp3,inp33,onclick}) => {
  const password=useSelector(state=>state.userdata.password)
  const newPass=useSelector(state=>state.userdata.newPassword)
  const confirmPass=useSelector(state=>state.userdata.confirmPassword)
  const dispatch=useDispatch()
  return (
    <>
     <Pagination name1={pagination1} name2={pagination2}/>
      <div className={styles.chngepasswordformcontainer}>
        <div className={styles.passwordformcontainer}>
            <div className={styles.tittlecontainer}>
                <span>{title}</span>
            </div>
            <div className={styles.passwordform}>
               
                <InputForm name1={inp1} name2={inp11} value={password}
                          handlechange={(e)=>dispatch(userdataActions.setpassword(e))}/>
                <InputForm name1={inp2}name2={inp22} value={newPass} handlechange={(e)=>dispatch(userdataActions.setnewPasword(e))}/>
                <InputForm name1={inp3}name2={inp33} value={confirmPass} handlechange={(e)=>dispatch(userdataActions.setconfirmPassword(e))}/>
                <div className={styles.loginbutton}>
                    <LoginBtn name={btn} onclick={onclick} />
                </div>
            </div>
        </div>
      </div> 
    </>
  )
}

export default FormsComp
