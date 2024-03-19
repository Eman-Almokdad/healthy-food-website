import styles from './login.module.css'
import { handleGithubLogin } from "@/lib/action";
import LoginForm from "@/Components/loginForm/LoginForm";
import { auth } from '@/lib/auth';


const LoginPage = () => {
//auth?.user?.isAdmin && router.push("/")
  return (
    <div className="" id={styles.divContainer}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin} className={styles.form}>
        <button className={styles.GitHub}>Login with GitHub</button>
      </form>
      <LoginForm/>
    </div>
    </div>
  )
}

export default LoginPage