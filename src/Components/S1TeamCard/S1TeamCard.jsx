import Image from 'next/image'
import styles from './S1TeamCard.module.css'

const S1TeamCard = ({image , insta , fb , twiter , membername}) => {
  return (
    <div className="col-md-3  mr-0 " id={styles.team_Card}>
    <div className={styles.card} >
        <Image src={image} className="card-img-top" alt="..."/>
        <div className="card-body   d-flex justify-content-between " id={styles.S13_bg_color}>
        <div className='d-flex flex-column justify-content-between p-2'>
            <h5 className=" card-title "id={styles.S13_h5} >{membername}</h5>
            <p className=" card-text" id={styles.S13_p}>Farmer</p>
        </div>
        <div className="d-flex justify-content-end align-items-end p-2 " id={styles.gap_17}>
            <Image src={insta} alt="" className={styles.social}/>
            <Image src={fb} alt="" className={styles.social}/>
            <Image src={twiter} alt="" className={styles.social} />
            
        </div>
        </div>
    </div></div>
  )
}

export default S1TeamCard