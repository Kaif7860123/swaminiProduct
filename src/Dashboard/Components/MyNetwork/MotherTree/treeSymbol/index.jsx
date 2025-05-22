import React from 'react'
import styles from './index.module.css'
import { symboldata } from '../../../../Data/symboldata'
const TreeSymbol = () => {
  return (
    <>
     <div className={styles.treesymbolcontainer}>
        {symboldata.map(it=>{
            return <div key={it.id} className={styles.treesymbol}>
                <div className={styles.imglog}>
            <img src={it.pic} alt="treelogo" />
                </div>
            <span>{it.name}</span>
            </div>
        })}
        
    </div> 
    </>
  )
}

export default TreeSymbol
  // <div className={styles.hvitem}>
  //             <div className={styles.hvitemparent}>
  //               <div className={styles.person}>
  //                 <div className={styles.imgcontainer}>
  //                   <img src={parent} alt="parentpic" />
  //                 </div>
  //                 <div className={styles.parentdetails}>
  //                   <span>SM788602</span>
  //                   <span>RANJEET SINGH YADAV</span>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className={styles.hvitemchildren}>
  //               <div className={styles.hvitemchild}>
  //                 <div className={styles.hvitem}>
  //                   <div className={styles.hvitemparent}>
  //                     <div className={styles.person}>
  //                       <div className={styles.imgcontainer}>
  //                         <img src={parent} alt="parentpic" />
  //                       </div>
  //                       <div className={styles.parentdetails}>
  //                         <span>SM788602</span>
  //                         <span>RANJEET SINGH YADAV</span>
  //                       </div>
  //                     </div>
  //                   </div>
                   
  //                 </div>
  //               </div>
  //               <div className={styles.hvitemchild}>
  //                 <div className={styles.hvitem}>
  //                   <div className={styles.hvitemparent}>
  //                     <div className={styles.person}>
  //                       <div className={styles.imgcontainer}>
  //                         <img src={parent} alt="parentpic" />
  //                       </div>
  //                       <div className={styles.parentdetails}>
  //                         <span>SM788602</span>
  //                         <span>RANJEET SINGH YADAV</span>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
