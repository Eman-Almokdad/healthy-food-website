import Image from 'next/image'
import styles from './HomeSection1.module.css'

const HomeSection1 = ({image , title , description }) => {
  return (
    
            <div className="h-100 card  text-white  position-relative" id={styles.sec1_border}>
                <Image src={image} className="card-img w-100 h-auto" id={styles.imgcontainer} alt="..." />
                <div className="card-img-overlay  position-absolute d-flex flex-column align-items-start justify-content-center " id={styles.ma_over}>
                    <p className={`${styles.ma_over_p} `}  >{title}</p>
                    <h1 className={` ${styles.ma_over_h1}`} >{description}</h1>
                </div>
            </div>
        
  )
}

export default HomeSection1