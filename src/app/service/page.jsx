import imgHero from '@/../../public/service-bg-hero.png';
import Hero from '@/Components/Hero/Hero'
import ServiceSection1 from '@/Components/ServiceSection1/ServiceSection1';
import ServiceSection2 from '@/Components/ServiceSection2/ServiceSection2';
export const metadata = {
  title: 'Service page ',
  description: 'Service description',
}
const ServicePage = () => {
  return (
    <div>
        <Hero img={imgHero} title="Services"  path ='Packages' btnAboutp ="d-none " center="align-items-center " />
        <ServiceSection1/>
        <ServiceSection2/>

    </div>
  )
}

export default ServicePage