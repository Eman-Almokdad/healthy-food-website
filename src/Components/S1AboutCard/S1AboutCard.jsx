import Image from 'next/image'
import styles from './S1AboutCard.module.css'

const S1AboutCard = ({img}) => {
  return (
    <div>
        <div className="row d-flex gap-4  justify-content-center w-100 ">
        <div className="col-md-4 p-0  pt-0 rounded" id={styles.col_md_4}>
                    <div className={styles.card_aboutOne}><Image src={img} alt="..."/>
                </div>
                <div className="text-center ">
                    <h5 className="">Return Policy</h5>
                    <p className={styles.mp_2}>Simply dummy text of the printintypesetting industry.</p>
                </div>
                </div>
                </div>
    </div>
  )
}

export default S1AboutCard