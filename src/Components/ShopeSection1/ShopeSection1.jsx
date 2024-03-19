import styles from './ShopeSection1.module.css'
import star from '../../../public/S3_Star.svg'
import S3img1 from '../../../public/S3_img1.png'
import S3img2 from '../../../public/S3_img2.png'
import S3img3 from '../../../public/S3_img3.png'
import S3img4 from '../../../public/S3_img4.png'
import S3img5 from '../../../public/S3_img5.png'
import S3img6 from '../../../public/S3_img6.png'
import S3img7 from '../../../public/S3_img7.png'
import S3img8 from '../../../public/S3_img8.png'
import S3img9 from '../../../public/Photo-9-removebg-preview 1.png'
import S3img10 from '../../../public/Photo-8-removebg-preview 1.png'
import S3img11 from '../../../public/Photo-7-removebg-preview 1.png'
import S3img12 from '../../../public/Photo-6-removebg-preview 1.png'
import S3Card from '../S3Card/S3Card'
const ShopeSection1 = () => {
    const HomeSection3 = [
        {
        image: S3img1,
        btn: "Vegetable",
        title1:"Calabrese Broccoli",
        title2:"$20.00",
        title3:"$13.00",
        stars: star,
        },
        {
            image: S3img2,
            btn: "Vegetable",
            title1:"Vegan Red Tomato",
            title2:"$20.00",
            title3:"$17.00",
            stars: star,
        },
        {
            image: S3img3,
            btn: "Millets",
            title1:"White Nuts",
            title2:"$20.00",
            title3:"$13.00",
            stars: star,
        },
        {
            image: S3img4,
            btn: "Health",
            title1:"Fresh Banana Fruites",
            title2:"$20.00",
            title3:"$14.00",
            stars: star,
        },
        {
            image: S3img5,
            btn: "Health",
            title1:"Mung Bean",
            title2:"$20.00",
            title3:"$13.00",
            stars: star,
        },
        {
            image: S3img6,
            btn: "Nuts",
            title1:"Brown Hazelnut",
            title2:"$20.00",
            title3:"$12.00",
            stars: star,
        },
        {
            image: S3img7,
            btn: "Fresh",
            title1:"Eggs",
            title2:"$20.00",
            title3:"$17.00",
            stars: star,
        },
        {
            image: S3img8,
            btn: "Fresh",
            title1:"Zelco Suji Elaichi Rusk",
            title2:"$20.00",
            title3:"$15.00",
            stars: star,
        },
        {
            image: S3img9,
            btn: "Fresh",
            title1:"Mung Bean",
            title2:"$20.00",
            title3:"$11.00",
            stars: star,
        },
        {
            image: S3img10,
            btn: "Fresh",
            title1:"White Hazelnut",
            title2:"$20.00",
            title3:"$12.00",
            stars: star,
        },
        {
            image: S3img11,
            btn: "Fresh",
            title1:"Fresh Corn",
            title2:"$20.00",
            title3:"$17.00",
            stars: star,
        },
        {
            image: S3img12,
            btn: "Health",
            title1:"Organic Almonds",
            title2:"$20.00",
            title3:"$15.00",
            stars: star,
        },
    ];
  return (
    <div className=" d-flex flex-column align-items-center" id={styles.ma_section_categories}>
    <p className="text-center " id={styles.title1} >Categories </p>
    <h1 className="text-center pb-5" id={styles.shop_h1_s1}>Our Products</h1>
    <div className="d-flex align-items-center flex-wrap justify-content-center  w-100 gap-2 flex-wrap" id={styles.ma_categories_allcard} >
        
    {
        HomeSection3.map((element ,index)=>{return(
            <S3Card key={index} image={element.image} btn={element.btn} title1={element.title1} title2={element.title2} title3={element.title3} star={element.stars} />
            )})}
        
    </div>
    </div>
  )
}

export default ShopeSection1