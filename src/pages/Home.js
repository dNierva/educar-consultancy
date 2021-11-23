import React from 'react';
import Summary from '../components/Summary';
import FeaturedProjects from '../components/FeaturedProjects';
import Departments from '../components/Departments';
import PartnerLogos from '../components/PartnerLogos';

function Home () {
    return (
        <React.Fragment>
            <Summary />
            <FeaturedProjects />
            <Departments />
            <PartnerLogos />
        </React.Fragment>
    )
}

export default Home;