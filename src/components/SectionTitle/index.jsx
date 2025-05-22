import React from 'react'
import styles from './index.module.css'
const SectionTitle = ({name}) => {
  return (
    <>
     <h2 className={styles.sectionTitle}>{name}</h2> 
    </>
  )
}

export default SectionTitle
