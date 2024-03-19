import styles from './about.module.css'
import Hero from '@/Components/Hero/Hero'
import imgHero from '@/../../public/heroHome.png';
import AboutSection1 from '@/Components/AboutSection1/AboutSection1';
import AboutSection2 from '@/Components/AboutSection2/AboutSection2';
import AboutSection3 from '@/Components/AboutSection3/AboutSection3';
import Subscribe from '@/Components/Subscribe/Subscribe';

export const metadata = {
  title: 'About page ',
  description: 'About description',
}
const AboutPage = () => {
  return (
    <div>
      <Hero img={imgHero} title="About Us"  path ='Packages' btnAboutp ="d-none " center="align-items-center " />
      <AboutSection1/>
      <AboutSection2/>
      <AboutSection3/>
      <Subscribe/>
    </div>
  )
}

export default AboutPage