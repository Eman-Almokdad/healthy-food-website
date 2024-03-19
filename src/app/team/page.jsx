import imgHero from '@/../../public/team-bg-hero.png';
import Hero from '@/Components/Hero/Hero'
import Subscribe from '@/Components/Subscribe/Subscribe';
import TeamSection1 from '@/Components/TeamSection1/TeamSection1';
export const metadata = {
  title: 'Team page ',
  description: 'Team description',
}
const TeamPage = () => {
  return (
    <div>
    <Hero img={imgHero} title="Our Team"  path ='Packages' btnAboutp ="d-none " center="align-items-center " />
    <TeamSection1/>
    <Subscribe/>
    </div>
  )
}

export default TeamPage