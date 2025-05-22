import React from 'react'
import CommonNetwork from '../../MyNetwork/CommonNetwork'
import { processedpayoutth } from '../../../Data/UserTable/processedPayout/processedpayout'

const ProcessedPayout = () => {
  return (
    <>
     <CommonNetwork fs="13px" tddata={[]} thdata={processedpayoutth} dailypayout={true} gap="20px" dis="grid" temp="repeat(3,1fr)"   name2="Payout Processed" name1="Daily Payout" title="Payout Processed"/> 
      
    </>
  )
}

export default ProcessedPayout
