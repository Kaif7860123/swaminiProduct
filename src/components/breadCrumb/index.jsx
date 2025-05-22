import React from 'react'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
function BreadCrumb({h1,para,link}) {
  const jump=useNavigate()
  const handleChange=()=>{
jump("/")
  }
  return (
    <>
       <div className={styles.aboutUS}>
          <p className={styles.head}>{h1}</p>
          <div className={styles.content}>
          <span className={styles.link} onClick={handleChange}>{link}</span>
          <p className={styles.relatedPage}>{para}</p>
          </div>
        </div>
    </>
  )
}

export default BreadCrumb
