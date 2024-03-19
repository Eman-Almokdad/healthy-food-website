import styles from './navbar.module.css'
import Link from "next/link"
import Links from "./Links/Links"
import Image from "next/image"
import logo from '../../../public/Logo.svg'
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

import { auth } from '@/lib/auth'
import Sidebar from '../sidebar/Sidebar'


const NavBar = async () => {
  const session = await auth();
  return (
    <nav className={" navbar navbar-expand-lg "} id={styles.nav} >
      <div className="container-fluid position-fixed top-0 padding-0 " id={styles.maNav}>
      <a className="navbar-brand" > <Image src={logo} alt="logo" className="ma-img"/> </a>
      <Sidebar session={session}/>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <Links session={session}/>
        <div className="d-flex flex-wrap gap-2 ">
                        <form className="d-flex d-flex align-items-center justify-content-end ">
                            <input className={styles.formcontrol} type="search" aria-label=" Search"/>
                            <button className="btn  position-absolute m-auto" id={styles.mabtn} type="submit"><IoIosSearch  />
</button>
                        </form>
                        <form className="d-flex ma-form d-flex align-items-center justify-content-start">
                            <input className={styles.formcontrol} id={styles.maformcontrol2}  type="search" aria-label=" Search"/>
                            <button className="btn  position-absolute m-auto fontsize-15" id={styles.btn2} type="submit"><FaShoppingCart />
</button>
                        </form>
                    </div>
      </div>
      </div>
    </nav>
  )
}

export default NavBar

