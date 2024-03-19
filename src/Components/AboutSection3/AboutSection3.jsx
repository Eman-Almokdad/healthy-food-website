import styles from './AboutSection3.module.css'
import img1 from '../../../public/S7_kmon.png'
import img2 from '../../../public/S7zhorat.png'
import img3 from '../../../public/S7_rmman.png'
import img4 from '../../../public/S7_znjabil.png'
import S3AboutCard from '../S3AboutCard/S3AboutCard'
const AboutSection3 = () => {
    const AboutSection3 = [
        {
        image: img1,
        title: "Spicy",
        
        },
        {
        image: img2,
        title: "Nuts & Feesd",
        },
        {
        image: img3,
        title: "Fruits",
        },
        {
        image: img4,
        title: "Vegetable",
        },
    ];
return (
    <div className={styles.ma_aboutasSection3}>
    <div className="container-fluid p-5">
        <p className="text-center  text-light fs-5 "id={styles.S9_P1}>About Us</p>
        <p className="text-center text-light fs-5 s9-p2" id={styles.s9_p2} >What We Offer for You</p>
        <div className=" d-flex justify-content-evenly align-items-center flex-wrap gap-3">
        {AboutSection3.map((Element , index)=>{return(
            <S3AboutCard key={index} img={Element.image} title={Element.title} />
        )})}
        </div>
    </div>
        
    </div>
)
}

export default AboutSection3