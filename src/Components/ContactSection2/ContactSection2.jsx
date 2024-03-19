
"use client"
/* import dynamic from 'next/dynamic' */
import styles from './ContactSection2.module.css'
/* import '@/Components/hydrationTest' */
/* const hydrationTestNoSSR = dynamic(()=> import("@/component/hydrationTest") , {ssr: false}) */
const ContactSection2 = () => {
    const a = Math.random()
    console.log(a)
  return (
    <div className={styles.contactSection2}>
        {/* <hydrationTestNoSSR /> */}
        <div suppressHydrationWarning>{a}</div>
    <form className="row g-5  ">
        <div className="col-md-6 d-flex align-items-stretch flex-column ">
            <label htmlFor="Full Name*" className="form-label " id={styles.em_span_s15}>Full Name*</label>
            <input type="text" className={styles.s15_input} id="Full Name*" placeholder="Your Name"/>
        </div>
        <div className="col-md-6 d-flex align-items-stretch flex-column">
            <label htmlFor="Your Email*" className="form-label " id={styles.em_span_s15}>Your Email*</label>
            <input type="email" className={styles.s15_input} id="Your Email*" placeholder="example@yourmail.com"/>
        </div>
        <div className="col-md-6 d-flex align-items-stretch flex-column">
            <label htmlFor="Company*" className="form-label " id={styles.em_span_s15}>Company*</label>
            <input type="text" className={styles.s15_input} id="Company*" placeholder="yourcompany name here"/>
        </div>
        <div className="col-md-6 d-flex align-items-stretch flex-column">
            <label htmlFor="Subject*" className="form-label " id={styles.em_span_s15}>Subject*</label>
            <input type="text" className={styles.s15_input} id="Subject*" placeholder="how can we help"/>
        </div>
        <div className="mb-3 ">
            <label htmlFor="Message*" className="form-label " id={styles.em_span_s15}>Message*</label>
            <textarea className={styles.em_s15_textarea} id="Message*" placeholder="hello there,i would like to talk about how to..."></textarea>
        </div>
        <div className="col-12">
            <button  type="submit" className="btn " id={styles.em_s15_btn}><span className={styles.em_span_btn_s15}>Send Message</span> </button>
        </div>
    </form>
    </div>
)
}

export default ContactSection2