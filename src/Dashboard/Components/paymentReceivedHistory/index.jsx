import React from 'react'
import AdminTitltSection from '../AdminTitleSection'
import Tables from '../Tables'
import { withdrwhistorySuccessth } from '../../Data/UserTable/withdrawWithoutSuccess'
 
import styles from './index.module.css'
const PaymentRecievedHistory = () => {
  return (
    <>
    <div className={styles.paymentCont}>
       <AdminTitltSection title="Payment Received History"/>
      <Tables
        thdata={withdrwhistorySuccessth}
        content="You did'nt received any payment yet."
        tddata={false}
      />
      </div>
    </>
  )
}

export default PaymentRecievedHistory
