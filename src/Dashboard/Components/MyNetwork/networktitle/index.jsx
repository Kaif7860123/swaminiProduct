import React from 'react'
import styles from './index.module.css'
import Pagination from '../../../shared/paginationheaders'
import Title from './Title'
const Networktitle = ({allcom,title,name1,name2}) => {
  return (
    <>
        <Pagination name1={name1} name2={name2} />
        <Title title={title} allcom={allcom}/>
    
    </>
  )
}

export default Networktitle
