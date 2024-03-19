import styles from './contact.module.css'
import imgHero from '../../../public/bg-hero-contact.png'
import Hero from '@/Components/Hero/Hero'
import Subscribe from '@/Components/Subscribe/Subscribe'
import ContactSection1 from '@/Components/ContactSection1/ContactSection1'
import ContactSection2 from '@/Components/ContactSection2/ContactSection2'
export const metadata = {
  title: 'Contact page ',
  description: 'Contact description',
}
const Contactpage = () => {
  return (
    <div>
    <Hero img={imgHero} title="Contact"  path ='Packages' btnAboutp ="d-none " center="align-items-center " />
    <ContactSection1/>
    <ContactSection2/>
    <Subscribe/>  
    </div>
  )
}

export default Contactpage