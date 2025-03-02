import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Services from '../ServicesSection/Services';
import Shop from '../ShopSection/Shop';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MediaGrid from '../MediaGrid/MediaGrid';

function Home (){
    return (
        <>
            <Header/>
            <Hero/>
            <AboutMe/>
            <MediaGrid/>
            <Services/>
            <Shop/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;