import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

