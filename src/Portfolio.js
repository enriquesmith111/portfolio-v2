import React from 'react';
import Banner from './Banner';
import './banner.css'
import About from './About';
import './about.css'
import HowStarted from './HowStarted';
import './how-started.css'
import ContactForm from './ContactForm';
import './contact-form.css'
import Projects from './Projects';
import './projects.css'
import Certificates from './Certificates';
import "./certificates.css"

export default function Portfolio() {
    return (
        <>
            <Banner />
            <About />
            <HowStarted />
            <Projects />
            <Certificates />
            <ContactForm />
        </ >
    )
}



