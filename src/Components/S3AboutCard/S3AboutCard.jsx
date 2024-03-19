import styles from './S3AboutCard.module.css'
import Image from 'next/image'
const S3AboutCard = ({img , title}) => {
  return (
    <div className=" d-flex flex-column  mb-5 " id={styles.card}>
    <Image className=" h-100 w-100" src={img} alt=""/>
    <p className="text-center text-light fs-5 p-3 ">{title}</p>
    </div>
  )
}

export default S3AboutCard