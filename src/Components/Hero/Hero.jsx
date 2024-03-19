import Image from 'next/image';
import styles from './Hero.module.css'
import { FaArrowCircleRight } from "react-icons/fa";
const Hero = ({img , title1 , title  , btn , btnAboutp , center }) => {
  return (
    <div className= {`${center}  hero-home container-fluid w-100 d-flex justify-content-center  flex-column gap-4 `} id={styles.hero} >
      <Image src={img} alt='imghero' className={styles.imghero} fill/>
    <div className={`${center} w-50 d-flex justify-content-center align-items-start flex-column`} id={styles.titleContainer}>
        <p className={styles.pHeroHome}>{title1}</p>
        <h1 className={styles.heroH1}>{title}</h1>
    </div>
    <button className={`${btnAboutp} border-0  d-flex justify-content-center align-items-center`} id={styles.btnHeroHome}>{btn} <FaArrowCircleRight /> </button>
</div>
  )
}

export default Hero