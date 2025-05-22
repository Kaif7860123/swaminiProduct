import React from 'react'
import styles from './index.module.css'
function InputBox({para,type,placeholder,onchange,value,defaultVal,readonly}) {
  return (
    <>
       <div className={styles.inputCont}>
                <p>{para}</p>
                <input type={type} placeholder={placeholder} readOnly={readonly} onChange={onchange} value={value} defaultValue={defaultVal} />
              </div>
    </>
  )
}

export default InputBox
