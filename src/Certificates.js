import { useState } from "react";
import TextRandomizer from './TextRandomizer'
import "./certificates.css"

const certificateData = [
    {
        name: '</Udemy Javascript 0 to Expert>',
        description: `I successfully completed the 80-hour Jonas Schmedtmann JavaScript 0 to Expert course. This comprehensive program thoroughly covered the fundamentals of JavaScript programming, from basic concepts to advanced topics. Throughout the course, I gained hands-on experience by building practical projects, which allowed me to solidify my understanding and apply my newfound knowledge in real-world scenarios.`,
        index: 0,
        image: 'javascript.png',
        key: 'javascript'
    },
    {
        name: '</British Computer Science>',
        description: 'I earned a Web Development Bootcamp certificate accredited by the British Computer Society (BCS). This prestigious certification validates my skills and expertise in web development, confirming that I have met the rigorous standards set by a globally recognized professional body.',
        index: 1,
        image: 'british-computer-science.png',
        key: 'british-computer-science'
    },
    {
        name: '</Le Wagon Web Development>',
        description: 'I obtained a Web Development Bootcamp certificate from Le Wagon, a renowned coding school. During my 8-month intensive program in London, I delved into the intricacies of web development, mastering Ruby and Ruby on Rails within the MVC framework. Additionally, I acquired foundational JavaScript skills for DOM manipulation. To reinforce my understanding and simulate real-world development environments, I collaborated with peers to create robust web applications.',
        index: 2,
        image: 'web-development.png',
        key: 'web-development'
    },
    {
        name: '</Platzi Front-end Developer>',
        description: `I earned a Front-End Developer certificate from Platzi, a leading South American online education platform. As a beginner, this course provided me with a solid foundation in coding, enabling me to develop basic single-page applications. I honed my skills in semantic HTML, CSS, and Bootstrap, mastering the art of crafting visually appealing and pixel-perfect user interfaces.`,
        index: 3,
        image: 'front-end.png',
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
