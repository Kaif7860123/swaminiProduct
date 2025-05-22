import React from 'react'
import styles from './index.module.css'
const SubmitBTn = ({name,onclick}) => {
  return (
    <>
<button className={styles.btn} onClick={onclick}> {name}
</button>
    </>
  )
}

export default SubmitBTn
