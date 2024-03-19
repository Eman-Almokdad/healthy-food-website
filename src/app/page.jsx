import styles from './home.module.css'
import Hero from '@/Components/Hero/Hero';
import herobg from './../../public/heroHome.png';
import sec1_1 from './../../public/sec_1_1.png'
import sec1_2 from './../../public/sec_1_2.png'
import HomeSection1 from '@/Components/HomeSection1/HomeSection1';
import HomeSection2 from '@/Components/HomeSection2/HomeSection2';
import HomeSection3 from '@/Components/HomeSection3/HomeSection3';
import HomeSection4 from '@/Components/HomeSection4/HomeSection4';
import HomeSection5 from '@/Components/HomeSection5/HomeSection5';
import HomeSection6 from '@/Components/HomeSection6/HomeSection6';
import S6img1 from './../../public/S6_img1.png'
import S6img2 from './../../public/S6_img2.png'
import S6img3 from './../../public/S6_img3.png'
import Subscribe from '@/Components/Subscribe/Subscribe';
const Home = () => {
  const homeSection1 = [
    {
    image: sec1_1,
    title: "Natural!!",
    description:
        "Get Garden Fresh Fruits",
    },
    {
    image: sec1_2,
    title: "Offer!!",
    description:
        "Get 10% off on Vegetables",
    maparagraph : "ma_paragraph",
    maparagraph2 : "ma_paragraph2"
    },
    
];
const homeSection6 = [
    {
    image: S6img1,
    btn: "Organic Food",
    
    },
    {
    image: S6img2,
    btn: "Organic Juice",
    },
    {
    image: S6img3,
    btn: "Nuts Cookis",
    },
    
    
];
  return (
  <div>
    <Hero img= {herobg} title1="100% Natural Food" title= 'Choose the best healthier way of life' path ='Packages' btn="Explore Now" center="align-items-start"  />
    <div className=" d-flex flex-wrap align-items-center justify-content-evenly gap-4 h-100" id={styles.ma_towCards}>
        {
                homeSection1.map((element , index) =>{return(
                    <HomeSection1  key={index} image={element.image } title={element.title } description={element.description } maparagraph={element.maparagraph} maparagraph2={element.maparagraph2} />
                )})
            } 
        </div>
    <HomeSection2/>
    <HomeSection3/>
    <HomeSection4/>
    <HomeSection5/>
    <div className="container d-flex justify-content-evenly align-items-center flex-wrap py-5 gap-3">
      {
        homeSection6.map((element , index) =>{return(
          <HomeSection6 image={element.image} btn={element.btn} key={index}/>
        )})
            }
    </div>
        <Subscribe/>

    </div>
    );
};

export default Home;