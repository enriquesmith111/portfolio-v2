import React from 'react';
import Banner from './Banner'; // Banner.js assumed to be in the same folder
import About from './About'; // About.js assumed to be in the same folder
import HowStarted from './HowStarted'; // HowStarted.js assumed to be in the same folder
import MokeponProject from './MokeponProject'; // MokeponProject.js assumed to be in the same folder
import FitSquadProject from './FitSquadProject'; // FitSquadProject.js assumed to be in the same folder
import Blog from './Blog';
import ContactForm from './ContactForm';

export default function Portfolio() {
    return (
        <div>
            <Banner />
            <About />
            <HowStarted />
            <MokeponProject />
            <Blog />
            <FitSquadProject />
            <ContactForm />
        </div>
    )
}



