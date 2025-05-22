import React from 'react'
import styles from './index.module.css'
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Pagination = ({name1,name2}) => {
    const paginatonnavigate = useNavigate()
    const handlepagination = (n) =>{
        paginatonnavigate(`/user${n.replace(" ","_").toLowerCase()}`)
    }
  return (
    <>
     <div className={styles.paginationcontainer}>
        <p className={styles.pagination}>
            <i><FaHome   size={15}/></i>
            <span onClick={()=>handlepagination("/dashboard")}>Home</span>
            {name1 && <span onClick={()=>handlepagination("/#")}>/&nbsp;&nbsp;{name1}</span>}
            {name2 && <span >/&nbsp;&nbsp;{name2}</span>}
        </p>
    
     </div>

    </>
  )
}

export default Pagination
