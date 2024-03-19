import styles from './HomeSection4.module.css'
import s4img1 from '../../../public/S4_img1.png'
import s4img2 from '../../../public/S4_img2.png'
import s4img3 from '../../../public/S4_img3.png'
import s4img4 from '../../../public/S4_img4.png'
import stars from '../../../public/S3_Star.svg'
import S4Card from '../S4Card/S4Card'
import { FaArrowCircleRight } from "react-icons/fa";


const HomeSection4 = () => {
    const HomeSection4 = [
        {
        image: s4img1,
        title1: "Calabrese Broccoli",
        title2:"$20.00",
        title3:"$13.00",
        stars:stars,
        },
        {
        image: s4img2,
        title1: "Vegan Red Tomato",
        title2:"$20.00",
        title3:"$17.00",
        stars:stars,
        macategoriesimg:"ma-categories-img"
        },
        {
        image: s4img3,
        title1: "White Nuts",
        title2:"$20.00",
        title3:"$15.00",
        stars:stars,
        
        },
        {
        image: s4img4,
        title1: "Resh Banana Fruites",
        title2:"$20.00",
        title3:"$14.00",
        stars:stars,
        },
        
    ];
  return (
    <div className={styles.ma_offer_section}>
    <div className="d-flex flex-wrap justify-content-between align-items-center pb-5">
        <div>
            <p className={styles.title1}>Offer</p>
            <h1 className={styles.h1_sec4}>We Offer Organic For You</h1>
        </div>
        <a href="" className="text-decoration-none"><button className="border-0" id={styles.btn_sec4}>Load More <FaArrowCircleRight /></button></a>
    </div>
    <div className=" d-flex align-items-center flex-wrap justify-content-center  w-100 gap-2 flex-wrap" id={styles.ma_categories_allcard}>
        {HomeSection4.map((element , index) =>{return(
            <S4Card key={index} image={element.image}  title1={element.title1} title2={element.title2} title3={element.title3} star={element.stars} macategoriesimg={element.macategoriesimg} />
        )})

        }
    </div>

    </div>
  )
}

export default HomeSection4