import React from 'react'
import styles from './index.module.css'
const PendingBTN = ({name, handleupdate,c}) => {
  return (
    <>
      <button onClick={handleupdate} style={{backgroundColor:c}} className={styles.pendingbtn}>{name}</button>
    </>
  )
}

export default PendingBTN
