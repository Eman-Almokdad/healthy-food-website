import styles from './TeamSection1.module.css'
import S1img1 from '../../../public/S13_img1.png'
import S1img2 from '../../../public/S13_img2.png'
import S1img3 from '../../../public/S13_img3.jpg'
import S1img4 from '../../../public/S13_img4.png'
import S1img5 from '../../../public/S13_img5.png'
import S1img6 from '../../../public/S13_img6.png'
import insta from '../../../public/s13_Insta.png'
import fb from '../../../public/s13_Fb.png'
import twiter from '../../../public/s13_Twiter.png'
import S1TeamCard from '../S1TeamCard/S1TeamCard'
const TeamSection1 = () => {
        const teamsection2 = [
            {
            image: S1img1,
            insta: insta ,
            fb: fb,
            twiter: twiter,
            membername:"Riga Pelore"
            },
            {
            image: S1img2,
            insta: insta ,
            fb: fb,
            twiter: twiter,
            membername:"Giovani Bacardo"
            },
            {
            image: S1img3,
            insta: insta ,
            fb: fb,
            twiter: twiter,
            membername:"Marianne Loreno"
            },
            {
            image: S1img4,
            insta: insta ,
            fb: fb,
            twiter: twiter,
            membername:"Keira Knightley"
            },
            {
            image: S1img5,
            insta: insta ,
            fb: fb,
            twiter: twiter,
            membername:"Scott Lawrence"
            },
            {
            image: S1img6,
            insta: insta ,
            fb: fb,
            twiter: twiter,
            membername:"Karen Allen"
            },
        ];
  return (
    <div className="p-5 " id={styles.padding_2}>
    <div className=" d-flex justify-content-center align-items-center flex-column gap-4 ">
        <div className="text-center w-50">
            <p className={styles.em_p_sec}>Team </p>
            <h1 className={styles.em_h1_sec}>Our Organic Experts</h1>
            <span className={styles.sp1_section13}>Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley.</span>
        </div>
        <div className="container ">
        <div className="row mb-3 gap-3 d-flex justify-content-center align-items-center ">
            {teamsection2.map((Element , index) =>{return(
                <S1TeamCard key={index} image={Element.image} insta={Element.insta} fb={Element.fb} twiter={Element.twiter} membername={Element.membername} />
            )})}
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default TeamSection1