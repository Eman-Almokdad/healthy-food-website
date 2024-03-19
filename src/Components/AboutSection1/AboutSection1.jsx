import styles from './AboutSection1.module.css'
import lemon from '../../../public/lemon.png'
import green from '../../../public/green.svg'
import s1img1 from '../../../public/S7_Return_Purchase.png'
import s1img2 from '../../../public/S7_Natural_Food.png'
import s1img3 from '../../../public/S7_Phone_Time.png'
import s1img4 from '../../../public/S7_Card_Security.png'
import Image from 'next/image'
import S1AboutCard from '../S1AboutCard/S1AboutCard'
const AboutSection1 = () => {
    const S1aboutcards = [
        {
        image: s1img1,
        },
        {
        image: s1img2,
        },
        {
        image: s1img3,
        },
        {
        image: s1img4,
        },
        
        
    ];
return (
    <div  className={styles.section_7}>
    <div className=" p-5  w-100" id={styles.ma_sectionOne}>
        <div className=" d-flex justify-content-between flex-wrap" id={styles.media_w100}>
            <div >
                <div>
                    <p className={styles.f_why}>Why Choose us?</p>
                    <p className={styles.f_we}>We do not buy from the <br/>open market & traders.</p>
                    <p className="pt-3">Simply dummy text of the printing and typesetting industry. Lorem had
                        <br/> ceased to been the industrys standard the 1500s when an unknown
                    </p>
                    <div className={styles.ma_about_package}>
                        <div className=" d-flex">
                            <Image className="" src={green} alt=""/>
                            <span className={styles.fa_natural}>100% Natural Product</span>
                        </div>
                    </div>
                </div>
                <div>
                    <p className=" pb-4">Simply dummy text of the printing and typesetting industry <br />
                        Lorem
                        Ipsum</p>
                </div>
                <div className={styles.ma_about_package}>
                    <div className=" d-flex">
                        <Image className="" src={green} alt=""/>
                        <span className={styles.fa_natural}> Increases resistance</span>
                    </div>
                </div>
                <div>
                    <p>Filling and temptingly healthy, our Biona Organic Granola with <br/> Wild Berries is just
                        the thing</p>
                </div>
            </div>
            <Image className={styles.ma_lemon_about} src={lemon} alt=""/>
        </div>
        <div className="d-flex align-items-center flex-wrap justify-content-center  w-100  flex-wrap pt-3" id={styles.ma_categories_allcard}>
            {
                S1aboutcards.map((Element , index) =>{return(
                    <S1AboutCard key={index} img={Element.image} />
                )})
            }
        </div>
    </div>
        
    </div>
)
}

export default AboutSection1