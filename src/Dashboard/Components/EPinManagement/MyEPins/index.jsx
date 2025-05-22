import React from 'react'
import CommonNetwork from '../../MyNetwork/CommonNetwork'
import MyPicSelect from './mypinselect'
import { myepinsth } from '../../../Data/UserTable/myepins/myepinsthdata'
const MyEpins = () => {
  return (
    <>
    
     <CommonNetwork thdata={myepinsth} tddata={[]} epin={true} allchildren={<MyPicSelect/>} gap="20px" dis="grid" temp="repeat(2,1fr)" child={false}  note="Note : Please Use Filter To View This Report." name2="My E-Pins" name1="E-Pin Management" title="My E-Pins"/>

    </>
  )
}

export default MyEpins
