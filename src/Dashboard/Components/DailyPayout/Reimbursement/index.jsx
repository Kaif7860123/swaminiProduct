import React from 'react'
import CommonNetwork from '../../MyNetwork/CommonNetwork'
import { reimbursementpayoutth } from '../../../Data/UserTable/Reimbursement/Reimbursementth'

const Reimbursement = () => {
  return (
    <>
     <CommonNetwork tddata={[]} thdata={reimbursementpayoutth} dailypayout={true} gap="20px" dis="grid" temp="repeat(3,1fr)"   name2="Reimbursement of Expenditure" name1="Daily Payout" title="Reimbursement of Expenditure"/>  
    </>
  )
}

export default Reimbursement
