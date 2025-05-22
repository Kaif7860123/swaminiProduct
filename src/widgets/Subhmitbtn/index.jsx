import React from 'react'
import styles from './index.module.css'
const SubmitBTn = ({name}) => {
  return (
    <>
<button className={styles.btn}> {name}
</button>
    </>
  )
}

export default SubmitBTn
