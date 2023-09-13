
import './Home.scss'


import Hero from '../../components/Hero';
import Consultation from '../../components/Consultation';
import Questions from '../../components/Questions';
import Earnp2p from '../../components/Earnp2p';
import Education from '../../components/Education';
import ClosedClub from '../../components/ClosedClub';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';



export const Home = () => {
 
  return (
    <div className='home'>
      <div className='navbarToSticky'><Navbar /></div>
      <Hero></Hero>
      <Consultation ></Consultation>
      <Questions></Questions>
      <Earnp2p></Earnp2p>
      <Education ></Education>
      <ClosedClub></ClosedClub>
      <Footer></Footer>


    </div>
  );
};