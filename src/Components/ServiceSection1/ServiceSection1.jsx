import styles from './ServiceSection1.module.css'
import img1 from '../../../public/services_Milk_Bottle.png'
import img2 from '../../../public/services_Online_Store.png'
import img3 from '../../../public/services_Delivery.png'
import img4 from '../../../public/s11_img1.png'
import img5 from '../../../public/services_Natural_Food.png'
import img6 from '../../../public/services_Vegetables_Bag.png'
import img7 from '../../../public/services_Radish.png'
import img8 from '../../../public/S11_img1.png'
import Image from 'next/image'
const ServiceSection1 = () => {
  return (
    <div className="  mb-5 " id={styles.ServiceSection1}>
    <div className=" d-flex justify-content-center align-items-center flex-column gap-4 ">
        <div className=" d-flex justify-content-center align-items-center flex-column gap-4 ">
            <div className=" text-center " id={styles.w_65}>
                <p className={styles.em_p_sec}>What we Grow </p>
                <h1 className={styles.em_h1_sec}>Better Agriculture for Better Future</h1>
            </div>
        </div>
        
    </div>
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column ">
                <div className="row d-flex justify-content-center w-100">
                    <div className="col " id={styles.column1}>
                    <div className="card  border-0 text-end me-0" style={{width: '24rem'}}>
                        <div className="card-body " id={styles.em_text}>
                            <Image src={img1} alt=""/>
                            <h5 className="card-title " id={styles.em_title_serv}>Dairy Products</h5>
                            <p className="card-text  " id={styles.em_text_serv} >Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="card-body " id={styles.em_text}>
                            <Image src={img2} alt=""/>
                            <h5 className="card-title " id={styles.em_title_serv}>Store Services</h5>
                            <p className="card-text " id={styles.em_text_serv}> Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="card-body " id={styles.em_text}>
                            <Image src={img3} alt=""/>
                            <h5 className="card-title " id={styles.em_title_serv}>Delivery Services</h5>
                            <p className="card-text " id={styles.em_text_serv}> Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col  border-0" id={styles.max_w}>
                    <div className="card border-0 text-center" style={{width: '24rem'}}>
                        <div className="card-body">
                    <Image className="w-100" src={img4} alt=""/>
                        </div>
                    </div>
                    </div>
                    <div className="col  " id={styles.column1}>
                    <div className="card border-0 ms-0 " style={{width: '24rem'}}>
                        <div className="card-body " id={styles.em_text}>
                            <Image src={img5} alt=""/>
                            <h5 className="card-title " id={styles.em_title_serv}>Agricultural Services</h5>
                            <p className="card-text " id={styles.em_text_serv}> Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="card-body " id={styles.em_text}>
                            <Image src={img6} alt=""/>
                            <h5 className="card-title " id={styles.em_title_serv}>Organic Products</h5>
                            <p className="card-text " id={styles.em_text_serv}> Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="card-body " id={styles.em_text}>
                            <Image src={img7} alt=""/>
                            <h5 className="card-title   " id={styles.em_title_serv}>Fresh Vegetables</h5>
                            <p className="card-text " id={styles.em_text_serv}> Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.</p>
                        </div>
                        </div>
                </div>
                </div>
                <button type="button" className="btn  d-flex justify-content-evenly align-items-center mt-5" id={styles.em_btn_s11}><span className={styles.em_s11_span}>Explore More </span> <Image src={img8} alt=""/></button>
                
            </div>
        
    </div>
  )
}

export default ServiceSection1