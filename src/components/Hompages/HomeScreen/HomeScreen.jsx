import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Services from '../ServicesSection/Services';
import Shop from '../ShopSection/Shop';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Home (){
    return (
        <>
            <Header/>
            <Hero/>
            <AboutMe/>
            <Services/>
            <Shop/>
            {/* <Gallery/> */}
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home;