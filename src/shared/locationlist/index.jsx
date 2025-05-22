import React from 'react'
import styles from './index.module.css'
import Icons from '../../widgets/icons'
const LocationList = ({icons,num,islocation,w}) => {
  return (
    <>
     <div className={styles.locationicontainer}>
          <Icons islocation={islocation} icon={icons} w={w}/>
          <span>{num}</span>
         </div>
         
    </>
  )
}

export default LocationList
