import React from 'react'
import styles from './index.module.css'
import UpdateBTN from '../../../widgets/UpdateBTN'
import PendingBTN from '../../widgets/pending'

const Tables = ({tddata,bool,thdata,btn,c}) => {
  return (
    <>
        <div className={styles.tablecontainer}>
            <table>
                <thead>
                <tr >
                    {thdata.map(it=>{
                       return <th key={it.id}>{it.th}</th>
                            
                        })}
                        </tr>
                </thead>
                {tddata.length > 0 &&
                 <tbody>
               { tddata.map((it,i)=>{
                      return  <tr key={i}>
                         <td>{i+1}</td>
                         {it.ammountuserid &&<td>{it.ammountuserid}</td>}
                         {it.utrnumber &&<td>{it.utrnumber}</td>}
                         {it.ammount &&<td>{it.ammount}</td>}
                         {it.ispending ?<td><PendingBTN name="Pending"/></td>:<td><UpdateBTN name="Success"/></td>}
                         {it.under_userid && <td>{it.under_userid}</td>}
                         {it.name && <td>{it.name}</td>}
                         {it.userid && <td>{it.userid}</td>}
                        {it.joiningDate && <td>{it.joiningDate?.slice(0,10)}</td>}
                        {(it.mobile && bool) && <td>{it.mobile}</td>}
                        {it.transactionPassword && <td>{it.transactionPassword}</td>}
                        </tr>
                    })}
                
                </tbody>
                
                }

            </table>
                
                {tddata.length==0 && <p>Not Record Exist</p> }
        </div>
    </>
  )
}

export default Tables
