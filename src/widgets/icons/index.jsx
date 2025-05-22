import React from 'react'
import styles from './index.module.css'
const Icons = ({icon,islocation,w}) => {
  return (<>
    {islocation ? 
      <i className={styles.icon1} style={{width:w}}>
      {icon}
    </i>
      :
      <i className={styles.icon}>
      {icon}
    </i> }
  </>

  )
}

export default Icons
