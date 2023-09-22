import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import Banner from '../Banner/Banner';
import About from './About/About';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import Technologies from './Technologies/Technologies';

const Home: FC = () => {
    return (
        <>
            <Helmet>
                <title>Brian Hamilton</title>
            </Helmet>
            <Banner />
            <About />
            <Technologies />
            <Projects />
            <ContactMe />
        </>
    );
};

export default Home;
