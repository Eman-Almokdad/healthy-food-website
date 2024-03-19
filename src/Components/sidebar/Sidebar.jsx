"use client"
import Image from 'next/image'
import styles from './sidebar.module.css'
import menunav from '../../../public//Menu.svg'
import esc from "../../../public/esc.svg"
import Links from '../navbar/Links/Links'
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react'
const Sidebar = ({session}) => {
      const [first, setfirst] = useState(false)
  return (
    <button className="navbar-toggler border-none p-0" id={styles.menuicon} type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation"onClick={()=>{setfirst(!first)}}>
    
    <div className={styles.sidbar} style={{display: (first)? "block" : "none"}}>
    <Image className={styles.imgsidbar} src= {esc} alt="" />
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
    <Image src={menunav} alt="" />
</button>
  )
}

export default Sidebar