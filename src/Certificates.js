import { useState } from "react";
import TextRandomizer from './TextRandomizer'
import "./certificates.css"

const certificateData = [
    {
        name: '</Udemy Javascript 0 to Expert>',
        description: `Built a photography blog using React.js to showcase a portfolio of travel photographs and integrate a seamless e-commerce experience for print sales.
        Leveraged React's component-based architecture to create a dynamic and responsive user interface for displaying images and processing purchase transactions. Implemented a dedicated blog section to share travel stories and engage with a growing audience. This project demonstrates proficiency in React.js for building interactive web applications with e-commerce functionality.`,
        index: 0,
        image: '../public/javascript.png',
        key: 'javascript'
    },
    {
        name: '</British Computer Science>',
        description: 'Earth Roulette is a web application built with React.js that injects a touch of serendipity into travel planning. It utilizes various APIs to present users with a randomly chosen country, enticing them to explore new destinations. This project showcases my proficiency in React.js, API integration, and creating a user-friendly web application. Earth Roulette takes it a step further by integrating OpenAI responses, providing users with a descriptive summary of the chosen country, including interesting facts and must-do activities. This enhances the user experience with well curated personalized descriptions. Earth Roulette serves as a testament to my ability to leverage technology to promote exploration and facilitate travel planning, further enhanced by the engaging animations created with LottieFiles.',
        index: 1,
        image: '../public/british-computer-science.png',
        key: 'british-computer-science'
    },
    {
        name: '</Le Wagon Full Stack>',
        description: 'I teamed up with a company that reached out needing help with the scripting for their Youtube podcast where they talk about finance topics with popular guests. After understanding their needs, I created AI-Scripts, a React.js web app designed to help individuals with podcast topics and guidance, users can type a general topic they might want to talk about and my AI script helper will return a list with guidance on different topics or discussions they can talk about on their podcast. Once the User is happy and has chosen a topic, they can ask further about this topic where the web app will display more in-depth conversations and discussion guidance from one sub-topic to the next for a more natural and fluid conversation on the podcast.',
        index: 2,
        image: '../public/web-development.png',
        key: 'web-development'
    },
    {
        name: '</Platzi Web Developer>',
        description: `Mokepon is a project that showcases my newly acquired skills on Javascript coding for creating a simple yet fun clone of the popular game franchise Pokemon, in this game you can play against a single opponent or  multiplayer 2v2. Mokepon's JavaScript code provides direct access to the browser's Document Object Model, enabling immediate and seamless updates to the displayed graphics and interactions. This eliminates the need for intermediary libraries or frameworks, minimizing the overhead and enhancing overall performance. By utilizing JavaScript directly, Mopekon delivers a smooth and responsive gaming experience across a wide range of devices, including mobile devices.`,
        index: 3,
        image: '../public/front-end.png',
        key: 'front-end'
    },
]

export default function Certificates() {
    const certificates = certificateData;
    const [CertificateIndex, setCertificateIndex] = useState(0);
    const newIndex = (CertificateIndex + 1) % certificates.length;
    const currentContainer = document.querySelector('.certificate-container');

    const handleNextCertificate = () => {

        // Schedule class removal with timeout
        setTimeout(() => {
            currentContainer.classList.remove('show-certificate');
        }, 400);
        setTimeout(() => { // Adjust timeout as needed (in milliseconds)
            currentContainer.classList.add('hidden-certificate');
        }, 400);

        setTimeout(() => {
            // Update Certificate Index
            setCertificateIndex(newIndex);
        }, 800)

        // Schedule class addition with timeout (after removal)
        setTimeout(() => {
            if (CertificateIndex === certificates[CertificateIndex].index) {
                currentContainer.classList.add('show-certificate');
            } else {
                currentContainer.classList.add('hidden-certificate');
            }
        }, 800);
    };


    return (
        <div className='certificate-wrapper' >
            <div id='certificate-container' className={`certificate-container ${CertificateIndex === certificates[CertificateIndex].index ? 'show-certificate' : 'hidden-certificate'}`}>
                {<CertificateText
                    certificateObj={certificates[CertificateIndex]}
                    key={certificates[CertificateIndex].name}
                />}
                <Certificateimage
                    certificateObj={certificates[CertificateIndex]}
                    key={CertificateIndex}
                />
            </div>
            <div className='next-button'>
                <button className="btn-arrow btn-arrow-right" title="Next" onClick={handleNextCertificate}></button>
                <p>Next</p>
            </div>
        </div >
    )
}

function CertificateText({ certificateObj }) {
    return (
        <div id='certificate-text' className='certificate-text'>
            <div className='text-and-link'>
                <TextRandomizer initialText={certificateObj.name} />
                {certificateObj.link && <a href={certificateObj.link} target="_blank" class="fa-solid fa-up-right-from-square" id='vibrate' rel="noreferrer"> </a>}
            </div>
            <p>{certificateObj.description}</p>
        </div>
    )
}


function Certificateimage({ certificateObj }) {
    const hiddenElemets = document.querySelectorAll('.hidden-sprite')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting && certificateObj.key === 'mokepon') {
                entry.target.classList.add('show-sprite')
            } else {
                entry.target.classList.remove('show-sprite')
            }
        });
    });


    hiddenElemets.forEach((el) => observer.observe(el));

    const className = `${certificateObj.key}-image`;
    return (
        <div className='certificate-images'>
            <div className='sprites'>
                <img className='pikachu hidden-sprite' src='pikachu.gif' alt="pikachu-sprite" />
                <img className='charizard hidden-sprite' src='charizard.gif' alt="charizard-sprite" />
                <img className='wartortle hidden-sprite' src='wartortle.gif' alt="wartortle-sprite" />
            </div>
            <div className='certificate-image'>
                <img className={className} src={certificateObj.image} alt='certificate' />
            </div>
        </div>
    )
}
