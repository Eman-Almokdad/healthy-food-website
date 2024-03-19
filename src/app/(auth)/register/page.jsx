import styles from './register.module.css'
import RegisterForm from "@/Components/registerForm/RegisterForm"

const Registerpage = () => {
  return (
    <div className="p-5 " id={styles.divContainer}>
    <div className={styles.wrapper}>
        <RegisterForm/>
    </div>
    </div>
  )
}

export default Registerpage