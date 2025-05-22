import styles from './index.module.css'
const SolialIcon = ({icon,color}) => {
  return (
    <>
      <i style={{backgroundColor:color}} className={styles.socialicon}>
        {icon}
      </i>
    </>
  )
}

export default SolialIcon
