"use client"
import NavLink from "./navLink/NavLink";
import styles from './links.module.css'
import { auth } from "@/lib/auth";
import { handleLogout } from "@/lib/action";
const Links = ({session}) => {
    const links =[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },    
        {
            title:'Service',
            path:'/service'
        },
        {
            title:'Shop',
            path:'/shop'
        },
        {
            title:'Team',
            path:'/team'
        },
        {
            title:'Contact',
            path:'/contact'
        },
    
    ];
    //TEMPORARY

const isAdmin = true;
  return (
    <div className="navbar-nav m-auto mb-2 mb-lg-0 ma-list gap-4">{
        links.map((link) =>(
            <NavLink  item={link} key={link.title}/>
        ))}
    {session?.user ? (
                <>
                {session.user?.isAdmin && <NavLink item={{title: "Admin", path:"/admin"}} />}
                <form action={handleLogout}>
                <button className={styles.logout}>logout</button>
                </form>
                
                </>
            ) : (
                <NavLink item={{title: "login" , path:"/login"}}/>
            )
        }
        </div>
  )
}

export default Links