import React from 'react'
import CommonNetwork from '../../MyNetwork/CommonNetwork'
import MyPicSelect from '../MyEPins/mypinselect'

const TransferRejected = () => {
  return (
    <>
     <CommonNetwork epin={true} fs="14px" allchildren={<MyPicSelect disp="grid" col="repeat(3,1fr)" gp="5px" third={true} />} gap="20px" dis="grid" temp="repeat(2,1fr)" child={false} th7="Package" th8="Quality" th9="Amount" th10="Status" th6="Transfer/Reject Date" th5="Transfer Type" th4="FromUser Name" th3="FronUser" th2="Req.No." th1="Sr.No." note="Note : Please Use Filter To View This Report." name2="Transferred/Rejected" name1="E-Pin Management" title="Transferred/Rejected E-PIns"/>
    </>
  )
}

export default TransferRejected
