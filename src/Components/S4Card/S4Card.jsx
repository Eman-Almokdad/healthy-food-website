import Image from 'next/image'
import styles from './S4Card.module.css'

const S4Card = ({image ,  title1 , title2 , title3 , star , macategoriesimg}) => {
  return (
    <div>
        <div className="col-md-4 p-0" id={styles.col_md_4}>
                        <div className={styles.ma_categories_card}>
                            <button className={styles.ma_categories_button}>Vegetable</button>
                            <Image className={styles.ma_categories_img} src={image} alt="" />
                            <p className={styles.ma_categories_paragraph}>{title1}</p>
                            <div className={styles.ma_categories_underline}></div>
                            <div className="d-flex justify-content-between align-items-center ">
                                <div className="d-flex gap-3  align-items-center  mt-3 ">
                                    <p><del className={styles.del_sec4}>{title2}</del></p>
                                    <p className={styles.p_sec4}>{title3}</p>
                                </div>
                                <Image src={star} alt=""/>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default S4Card