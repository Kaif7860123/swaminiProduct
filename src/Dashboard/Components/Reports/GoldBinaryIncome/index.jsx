import React from 'react'
import CommonNetwork from '../../MyNetwork/CommonNetwork'
import { golddownlinememberth } from '../../../Data/UserTable/golddownline/golddownlinethdata'

const GoldBinaryIncome = () => {
  return (
    <>
     <CommonNetwork tddata={[]} thdata={golddownlinememberth} gap="20px" dis="grid" temp="repeat(3,1fr)" status={true} child={false} th6={false}  note="Note : Please Use Filters To View This Report." name2="Gold Binary Income" name1="Reports" title="Gold Binary Income Report"/> 
    </>
  )
}

export default GoldBinaryIncome
