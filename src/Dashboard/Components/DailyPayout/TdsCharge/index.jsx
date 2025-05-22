import React from 'react'
import CommonNetwork from '../../MyNetwork/CommonNetwork'
import { tdschargeth } from '../../../Data/UserTable/TDScharge/tdscharge'

const TDSCharge = () => {
  return (
    <>
     <CommonNetwork tddata={[]} thdata={tdschargeth}  dailypayout={true} gap="20px" dis="grid" temp="repeat(3,1fr)"     name2="Payout TDS Charge" name1="Daily Payout" title="Payout TDS Charge"/>  
    </>
  )
}

export default TDSCharge
