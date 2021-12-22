import React from 'react';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import FeaturedProjects from '../components/FeaturedProjects';
import Departments from '../components/Departments';
import PartnerLogos from '../components/PartnerLogos';

function Home () {
    return (
        <React.Fragment>
            <Hero />
            <Summary />
            <FeaturedProjects />
            <Departments />
            <PartnerLogos />
        </React.Fragment>
    )
}

export default Home;