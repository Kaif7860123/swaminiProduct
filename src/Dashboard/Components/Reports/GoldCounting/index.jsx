import React from 'react'
import CommonNetwork from '../../MyNetwork/CommonNetwork'
import { goldcountingth } from '../../../Data/UserTable/goldcounting/goldcounting'

const GoldCounting = () => {
  return (
    <>
     <CommonNetwork tddata={[]} thdata={goldcountingth} gap="20px" dis="grid" temp="repeat(2,1fr)" child={false}  note="Note : Please use filters to view report." name2="Gold Counting Report" name1="Reports" title="Gold Counting Detail"/>
      
    </>
  )
}

export default GoldCounting
