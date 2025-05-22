import React from 'react'
import AdminTitltSection from '../AdminTitleSection'
import Tables from '../Tables'
import { userpromotionReward } from '../../data/UserTable/PromotionReward'
 import styles from './index.module.css'
const PromotionReward = () => {
  return (
    <>
    <div className={styles.promotionRewardCont}>
      <AdminTitltSection title="Reward Income"/>
      <Tables
        thdata={userpromotionReward}
        content="No User Exist"
        tddata={false}
      />
      </div>
    </>
  )
}

export default PromotionReward
