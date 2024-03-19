import styles from './HomeSection2.module.css'
import S2img from '../../../public/S2_img.png'
import s2icon1 from '../../../public/s2_icon1.png'
import s2icon2 from '../../../public/s2_Icon2.png'
import Image from 'next/image'
import { FaArrowCircleRight } from "react-icons/fa";
const HomeSection2 = () => {
  return (
    <div className =" d-flex flex-wrap align-items-center  " id={styles.ma_believe_section}>
    <Image src={S2img} alt="" className=" w-50   " id={styles.ma_believe_img} />
    <div className="  py-3 title " id={styles.ma_about_partOne}>
        <p className={styles.ma_paragraph_partOne}>About Us</p>
        <h1 className={styles.h1_parag}>We Believe in Working Accredited Farmers</h1>
        <p className={styles.ma_paragraph_partTwo}>Simply dummy text of the printing and typesetting industry. Lorem had
            ceased to
        <p className={styles.ma_paragraph_partTwo}>been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a
            galley.</p>

        </p>
        <div className="d-flex  w-75 pb-5" id={styles.ma_about_cardOne}>
            <Image src={s2icon1} alt=""/>
            <div className=" w-100" id={styles.ma_about_space}>
                <h3 className={styles.h3_parag}>Organic Foods Only</h3>
                <p className="w-100" id={styles.ma_p_cardOne}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
        </div>
        <div className="d-flex  w-75" id={styles.ma_about_cardOne}>
            <Image src={s2icon2} alt="" />
            <div className=" w-100" id={styles.ma_about_space}>
                <h3 className={styles.h3_parag}>Quality Standards</h3>
                <p className="w-100" id={styles.ma_p_cardOne}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
        </div>
        <button>Shop Now <FaArrowCircleRight /></button>
    </div></div>
  )
}

export default HomeSection2