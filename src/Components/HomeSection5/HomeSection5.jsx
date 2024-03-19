import styles from './HomeSection5.module.css'
import bgimg from '../../../public/S5-img1.png'
import Image from 'next/image'

const HomeSection5 = () => {
  return (
    <div className=" position-relative" id={styles.section_5}>
    <div className=" h-100" id={styles.section_5_sub} >
    <Image src={bgimg} alt='backgroundImage' className={styles.img_sec5} fill/>
        <div className={styles.section_5_text}>
            
            <h4 className=" section-title-green " id={styles.title_sm}>Eco Friendly</h4>
            <h1 className={styles.title_big}>Econis is a Friendly Organic Store</h1>
            <div className="content flex flex-direction">
                
                <div className="section5-text-content">
                    <p className={styles.title_sec5}>Start with Our Company First</p>
                    <p className={styles.text_sec5}>Sed ut perspiciatis unde omnis iste natus error
                        sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                </div>
                
                <div className="section5-text-content">
                    <p className={styles.title_sec5}>Learn How to Grow Yourself</p>
                    <p className={styles.text_sec5}>Sed ut perspiciatis unde omnis iste natus error
                        sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                </div>
                
                <div className="section5-text-content">
                    <p className={styles.title_sec5}>Farming Strategies of Today</p>
                    <p className={styles.text_sec5}>Sed ut perspiciatis unde omnis iste natus error
                        sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeSection5