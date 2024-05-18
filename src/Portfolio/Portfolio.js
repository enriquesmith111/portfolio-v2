import React from 'react';
import Banner from './Banner'; // Banner.js assumed to be in the same folder
import About from './About'; // About.js assumed to be in the same folder
import HowStarted from './HowStarted'; // HowStarted.js assumed to be in the same folder
import ContactForm from './ContactForm';
import Projects from './Projects';

export default function Portfolio() {
    return (
        <div>
            <Banner />
            <About />
            <HowStarted />
            <Projects />
            <ContactForm />
        </div>
    )
}



