import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/Components/navbar/NavBar';
import Footer from '@/Components/footer/Footer';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:'comprehensive healthy food website Home Page',
    template:'%s | comprehensive healthy food website'
  },
  description: 'Next.js Health Expert Nutritional tips health ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&family=Yellowtail&display=swap" rel="stylesheet"/>
<link rel="icon" href="./logo.png"/>
      </head>
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}