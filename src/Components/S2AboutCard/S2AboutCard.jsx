import Image from 'next/image'
import styles from './S2AboutCard.module.css'

const S2AboutCard = ({image , insta , fb , twiter , membername}) => {
  return (
    <div className="col  mr-0  w-340 " id={styles.col}>
      <div className="card" id={styles.card} >
        <Image src={image} className="card-img-top" alt="..."/>
        <div className="card-body   d-flex justify-content-between " id={styles.S13_bg_color}>
          <div>
            <h5 className="card-title" id={styles.S13_h5}>{membername}</h5>
            <p className=" card-text" id={styles.S13_p}>Farmer</p>
          </div>
          <div className="d-flex justify-content-end align-items-end " id={styles.gap_17}>
            <Image src={insta} alt="" className={styles.social}/>
            <Image src={fb} alt="" className={styles.social}/>
            <Image src={twiter} alt="" className={styles.social} />
                                
          </div>
        </div>
      </div>
    </div>
  )
}

export default S2AboutCard