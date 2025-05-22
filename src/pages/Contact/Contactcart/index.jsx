import React from 'react'
import styles from './index.module.css'
const ContactCart = ({location,paragraph,icon,para}) => {
  return (
    <>
      <div className={styles.contaictcards}>
        <i>{icon}</i>
        <span>{location}</span>
        <p>{paragraph}</p>
        <p>{para}</p>
      </div>
    </>
  )
}

export default ContactCart
