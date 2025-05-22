import React from 'react'
import styles from './index.module.css'
const LoginBtn = ({name,onclick}) => {
  return (
    <>
      <button className={styles.button2} onClick={onclick}>{name}</button>
    </>
  )
}

export default LoginBtn
