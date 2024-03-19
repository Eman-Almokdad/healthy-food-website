import Image from 'next/image'
import styles from './HomeSection6.module.css'

const HomeSection6 = ({image , btn}) => {
  return (
    <div  className="col-md-3 card bg-dark text-white  border-0">
    <Image src={image} className="card-img  w-100" alt="..."  />
      <div className="card-img-overlay d-flex align-items-center justify-content-center">
        <button className=" border-0" id={styles.ma_cards_button}>{btn}</button>
      </div>
  </div>
  )
}

export default HomeSection6