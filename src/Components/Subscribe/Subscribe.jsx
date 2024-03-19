import styles from './Subscribe.module.css'
import newslatter from '../../../public/newslatter.png'
import Image from 'next/image'
const Subscribe = () => {
  return (
    <div className=' ' id={styles.ma_section_subscribe}>

    <div className="  " id={styles.ma_subscribe_partOne}>   
    <Image src={newslatter} className={styles.img_bg}   />
    <div className='d-flex flex-wrap justify-content-between align-items-center' id={styles.textContainer}>
    <h1 className={styles.ma_subscribe_h1}>Subscribe to our Newsletter</h1>
        <form className="d-flex flex-wrap gap-2 p-5" id={styles.ma_subscribe_form}>
            <input className={styles.ma_subscribe_input} type="search" placeholder="Your Email Address" aria-label="Search"/>
            <button className={styles.ma_sub_btn} type="submit">Search</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Subscribe