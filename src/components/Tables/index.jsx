import React, { useState } from 'react'
import styles from './index.module.css'
import UpdateBTN from '../../widgets/UpdateBTN'
import DeleteBTN from '../../widgets/DeleteBTN'
import PendingBTN from '../../widgets/pending'
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import ViewPic from '../../widgets/ViewPic'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import useApihook from '../../hooks/ApiHook'
import { data } from 'react-router-dom'
const Tables = ({tddata,thdata,upt,upt2,del,send,bool,name,handleupdatedata,handledelete,content,handleupdate}) => {

  const handleviewpic=(url,utr)=>{
    Swal.fire({
      title:`UTR : ${utr}`,
      imageUrl: url,
      imageWidth:300,
      imageAlt: "reciept image",
      customClass:{
        image:"handle"
      }
    });
  }

 
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
                {!tddata.length<1 &&
                 <tbody>
               { tddata.map((it,i)=>{
                      return  <tr key={it.id}>
                           <td>{i+1}</td>
                           {it.ammountuserid && <td>{it.ammountuserid}</td>}
                           {it.utrnumber && <td>{it.utrnumber}</td>}
                           {it.reciept && <td >
                            <i onClick={()=>handleviewpic(it.reciept,it.utrnumber)}><HiOutlineViewfinderCircle size={35}/></i>
                            </td>}
                           {it.ammount && <td>{it.ammount}</td>}
                           {it.ispending ? <td><i><PendingBTN handleupdate={()=>handleupdate(it.ispending,it.ammountuserid,it.utrnumber)} name="Pending"/></i></td>: it.ispending==false && <td><i><UpdateBTN name="Success"/></i></td>}
                           {it.userid && <td>{it.userid}</td>}
                          
                           {it.bankName && <td>{it.bankName}</td>}
                           {it.accountNumber && <td>{it.accountNumber}</td>}
                           {it.accountType && <td>{it.accountType}</td>}
                           {it.ifscCode && <td>{it.ifscCode}</td>}
                           {it.branch && <td>{it.branch}</td>}
                           {it.panNumber && <td>{it.panNumber}</td>}

                           {it.pinrs && <td>{it.pinrs}</td>}
                           {it.pintype && <td>{it.pintype}</td>}
                           {send && <td><UpdateBTN name="Open"/></td>}
                           {it.name && <td>{it.name}</td>}
                           {it.email &&  <td>{it.email}</td>}
                           {it.dob &&  <td>{it.dob.slice(0,10)}</td>}
                           {it.gender &&  <td>{it.gender}</td>}
                           {it.password && <td>{it.password}</td>}
                           {it.mobile &&  <td>{it.mobile}</td>}
                           {it.pan &&  <td>{it.pan}</td>}
                           {it.pincode &&  <td>{it.pincode}</td>}
                           {it.nominee &&  <td>{it.nominee}</td>}
                           {it.nomineeRelation &&  <td>{it.nomineeRelation}</td>}
                           {it.streat &&  <td>{it.streat}</td>}
                           {it.district &&  <td>{it.district}</td>}
                           {it.city &&  <td>{it.city}</td>}
                           {it.state &&  <td>{it.state}</td>}
                           {it.country &&  <td>{it.country}</td>}
                           {it.address && <td>{it.address}</td>}
                          {it.under_userid ?
                          <td>{it.under_userid}</td>
                           :
                           upt && <td></td> 
                           } 
                          {it.side && <td>{it.side}</td>}
                          {(upt || upt2) &&<td><UpdateBTN handleupdate={()=>handleupdatedata(it.password,it.userid)}  name="Update"/></td>}
                          {del &&<td><DeleteBTN handledelete={()=>handledelete(it.password,it.userid,it.bankName)} name="Delete"/></td>}
                        </tr>
                    })}
                
                </tbody>
                
                }

            </table>
                
                {tddata.length<1 && <p>Not Record Exist</p> }
        </div>
    </>
  )
}

export default Tables
