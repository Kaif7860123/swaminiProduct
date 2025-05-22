import React from 'react'
import styles from './index.module.css'
const LoginBtn = ({handleclick,name}) => {

  return (
    <>
      <button onClick={handleclick} className={styles.button2}>{name}</button>
    </>
  )
}

export default LoginBtn
