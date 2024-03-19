import imgHero from '@/../../public/heroHome.png';
import Hero from '@/Components/Hero/Hero'
import ShopeSection1 from '@/Components/ShopeSection1/ShopeSection1';
import Subscribe from '@/Components/Subscribe/Subscribe';
export const metadata = {
  title: 'Shop page ',
  description: 'Shop description',
}
const ShopPage = () => {
  return (
    <div>
    <Hero img={imgHero} title="Shope"  path ='Packages' btnAboutp ="d-none " center="align-items-center " />
    <ShopeSection1/>
    <Subscribe/>
    </div>
  )
}

export default ShopPage