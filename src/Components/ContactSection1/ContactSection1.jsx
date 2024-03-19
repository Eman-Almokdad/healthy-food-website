import styles from './ContactSection1.module.css'
import imgleft from '../../../public/S14-img1.jpg'
import img1 from '../../../public/S14-1.png'
import img2 from '../../../public/S14-2.png'
import img3 from '../../../public/S14-3.png'
import img4 from '../../../public/S14-4.png'
import icon1 from '../../../public/S14-Iocn8.png'
import icon2 from '../../../public/S14-Icon(2).png'
import Image from 'next/image'
const ContactSection1 = () => {
  return (
    <div className=" pt-5 pb-5 center">
    <div className="d-flex flex-wrap align-items-center  gap-3">
        <Image src={imgleft} alt="" className={styles.w_45} />
        <div className=" w-50  " id={styles.s14_div}>
            <h1 className="pb-2 text-center " id={styles.s14_h1}>Wed love to talk about how we can work together.</h1>
            <p className="text-center "id={styles.s14_p} >Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
                galley.
            </p>
            <div className="d-flex align-items-center pt-4 gap-4 " id={styles.w_203}>
                <Image src={icon1} alt=""/>
                <div>
                    <h4 className={styles.s14_h4}>Message</h4>
                    <p>support@organic.com</p>
                </div>
            </div>
            <div className="d-flex align-items-center pb-4 pt-4 gap-4 p-0 " id={styles.w_203}>
                <Image src={icon2} alt=""/>
                <div>
                    <h4 className={styles.s14_h4}>Contact Us</h4>
                    <p>+01 123 456 789</p>
                </div>
            </div>
            <div className="pt-5">
                <Image src={img1} alt=""/>
                <Image src={img2} alt=""/>
                <Image src={img3} alt=""/>
                <Image src={img4} alt=""/>
            </div>
        </div>
    </div>
        
    </div>
  )
}

export default ContactSection1