import React from 'react'
import styles from './index.module.css'
const DeleteBTN = ({name, c}) => {
  return (
    <>
      <button style={{backgroundColor:c}} className={styles.deletebtn}>{name}</button>
    </>
  )
}

export default DeleteBTN
