import styles from './ServiceSection2.module.css'
import img1 from '../../../public/S12-Video-Icon.png'
import bgimg from '../../../public/S12-bg-serv.png'
import Image from 'next/image'
const ServiceSection2 = () => {
  return (
    <div className="container-fluid  d-flex justify-content-center align-items-center  " id={styles.em_bg_s12} >
         <Image src={bgimg} className={styles.bgimg} alt='img' fill />
    <div className=" text-center  position-absolute" id={styles.w_55} >
        <div className="card-text">
            <p className={styles.em_p_sec}>Organic Only </p>
            <h1 className="card-title em-h1-sec " id={styles.em_h1_sec} >Everyday Fresh & Clean</h1>
            <p className="card-text " id={styles.em_s12_text} >Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industrys standard dummy text ever since the </p>     
            <div className="mt-5  ">
                <Image className={styles.w_107} src={img1} alt=""/>
            </div>
        </div>
</div>
</div>
  )
}

export default ServiceSection2