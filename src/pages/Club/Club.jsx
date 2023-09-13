import './Club.scss'

import ClubHero from '../../components/ClubHero';
import ClubAbout from '../../components/ClubAbout';
import Footer from '../../components/Footer';
import ClubPrice from '../../components/ClubPrice';
import Navbar from '../../components/Navbar';




export const Club = () => {
    return (
        <div className='club'>
            <div className='navbarToSticky'><Navbar /></div>
            <ClubHero />
            <ClubAbout />
            <ClubPrice />
            <Footer />

        </div>
    );
};