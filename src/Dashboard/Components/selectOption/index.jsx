import React, { useState } from 'react'
import styles from './index.module.css'
const SelectOption = ({para,opt1,opt2,opt3,opt4,opt,onchange,opt0}) => {
  return (
    <>
      <div className={styles.inputCont}>
                <p> {para} </p>
                <select onChange={onchange}>
                {opt0&&<option>{opt0}</option>}

                  {opt1 &&  <option>{opt1}</option>}
                {opt && 
                opt.map(it=>{
                  return <option value={`${it.pinrs} -Rs.&nbsp; ${it.pintype}`}>{it.pinrs}-Rs.&nbsp;{it.pintype}</option>
                })
                 }
                {opt2 &&<option value={opt2}>{opt2}</option>}
                  {opt3 && <option value={opt3}>{opt3}</option>}
                 {opt4 && <option value={opt4}>{opt4}</option>}
                </select>
              </div>
    </>
  )
}

export default SelectOption
