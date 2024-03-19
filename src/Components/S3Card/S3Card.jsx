import Image from 'next/image'
import styles from './S3Card.module.css'
const S3Card = ({image , btn , title1 , title2 , title3 , star}) => {
    return (
            <div className="col-md-4 p-0 " id={styles.col_md_4}>
                <div className={styles.ma_categories_card}>
                    <button className={styles.ma_categories_button}>{btn}</button>
                    <Image src={image} alt=""/>
                    <p className={styles.ma_categories_paragraph}>{title1}</p>
                    <div className={styles.ma_categories_underline}></div>
                        <div className="d-flex justify-content-between align-items-center " >
                            <div className="d-flex gap-3  align-items-center  mt-3" id={styles.ma_categories_package}>
                                <p><del>{title2}</del></p>
                                <p>{title3}</p>
                            </div>
                            <Image src={star} alt=""/>
                        </div>
                </div>
            </div>
        
    )
    }
    
    export default S3Card