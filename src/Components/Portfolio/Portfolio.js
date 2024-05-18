import React from 'react';
import Banner from './Banner';
import About from './About';
import HowStarted from './HowStarted';
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



