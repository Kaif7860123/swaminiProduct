import React from 'react'
import AdminTitltSection from '../AdminTitleSection'
import Tables from '../Tables'
import { incomeHistorydata } from '../../data/UserTable/incomehistory'
 import styles from './index.module.css'
const IncomeHistory = () => {
  return (
    <>
    <div className={styles.icomeCont}>
       <AdminTitltSection title="Income"/>
      <Tables
        thdata={incomeHistorydata}
        content="No User Exist"
        tddata={false}
      />
      </div> 
    </>
  )
}

export default IncomeHistory
