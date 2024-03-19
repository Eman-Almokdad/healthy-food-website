import styles from './footer.module.css'
import Logo from '../../../public/Logo.svg'
import icon1 from '../../../public/footer-1icon.png'
import icon2 from '../../../public/footer-2icon.png'
import icon3 from '../../../public/footer-3icon.png'
import icon4 from '../../../public/footer-4icon.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-evenly" id={styles.footer}>
        <div dir="rtl" className={styles.maFootrtPartthree}>
            <h2>Contact Us</h2>
            <div>
                <h3>Email</h3>
                <p>needhelp@Organia.com</p>
            </div>
            <div>
                <h3>Phone</h3>
                <p>666 888 888</p>
            </div>
            <div>
                <h3>Address</h3>
                <p>88 road, borklyn street, USA</p>
            </div>
        </div>
        <div className="text-center " id={styles.maFootrtPartTow}>
            <a className=" navbar-brand" href="#"><Image src={Logo} alt="logo" /></a>
            <p>Simply dummy text of the printing and typesetting industry.</p>
            <p className="m-0 " id={styles.ma_p2}>Lorem Ipsum simply dummy text of the printing </p>
            <div>
                <Image src={icon1} alt=""/>
                <Image src={icon2} alt=""/>
                <Image src={icon3} alt=""/>
                <Image src={icon4} alt=""/>
            </div>
        </div>
        <div className={styles.maFootrtPartthree}>
            <h2>Utility Pages</h2>
            <p>Style Guide</p>
            <p>404 Not Found</p>
            <p>Password Protected</p>
            <p>Licences</p>
            <p>Changelog</p>
        </div>
      </footer>
  )
}

export default Footer