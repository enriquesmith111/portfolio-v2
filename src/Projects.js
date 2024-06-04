import React, { useState } from 'react';
import './projects.css'
import TextRandomizer from './TextRandomizer'

const projectData = [
    {
        name: '</Mokepon>',
        description: `Mokepon is a project that showcases my newly acquired skills on Javascript coding for creating a simple yet fun clone of the popular game franchise Pokemon, in this game you can play against a single opponent or  multiplayer 2v2. Mokepon's JavaScript code provides direct access to the browser's Document Object Model, enabling immediate and seamless updates to the displayed graphics and interactions. This eliminates the need for intermediary libraries or frameworks, minimizing the overhead and enhancing overall performance. By utilizing JavaScript directly, Mopekon delivers a smooth and responsive gaming experience across a wide range of devices, including mobile devices.`,
        image: 'empty-laptop.png',
        index: 0,
        key: 'mokepon'
    },
    {
        name: '</Photography Blog>',
        description: `Built a photography blog using React.js to showcase a portfolio of travel photographs and integrate a seamless e-commerce experience for print sales.

        Leveraged React's component-based architecture to create a dynamic and responsive user interface for displaying images and processing purchase transactions. Implemented a dedicated blog section to share travel stories and engage with a growing audience. This project demonstrates proficiency in React.js for building interactive web applications with e-commerce functionality.`,
        image: 'empty-laptop.png',
        index: 1,
        key: 'blog'
    },
    {
        name: '</Sea&B>',
        description: `Sea&B is a Ruby on Rails web app modeled after AirBnB, tailored for luxury yacht rentals. By leveraging Ruby, PostgreSQL for the database, and the MVC architecture, Sea&B mirrors the complexity of AirBnB's schema. Hosting on Heroku ensures seamless deployment and scalability. Bootstrap enhances the user interface, enabling intuitive navigation and booking. Additionally, the integration of Mapbox API facilitates location-based yacht searches. Offering a diverse selection of sailboats, motor yachts, and catamarans, Sea&B stands out with its user-friendly interface, robust database structure, and advanced search functionality. Perfect for holidaymakers seeking luxury yacht rentals or owners looking to monetize their vessels, Sea&B is a tech-forward solution in the yacht rental industry.`,
        image: 'empty-laptop.png',
        index: 2,
        key: 'sea-and-b'
    },
    {
        name: '</Fit-Squad>',
        description: ' My first ever programming project is Fit-Squad is a Ruby on Rails web app fostering a fitness community. It stands out by emphasizing social connections and group events. Users engage with like-minded individuals, join sports groups, and attend activities. The app also offers an AI model for personalized home workouts, catering to users fitness goals efficiently. Utilizing PostgreSQL, Mapbox API, and OpenAI API, Fit-Squad ensures a well-structured and maintainable codebase. This blend of social interaction and AI-driven fitness guidance sets Fit-Squad apart in the realm of fitness apps, promoting support, motivation, and convenience for users seeking to improve their fitness levels.',
        image: 'empty-laptop.png',
        index: 3,
        key: 'fit-squad'
    },
    {
        name: '</Earth Roulette>',
        description: 'Earth Roulette is a web application built with React.js that injects a touch of serendipity into travel planning. It utilizes various APIs to present users with a randomly chosen country, enticing them to explore new destinations. This project demonstrates my proficiency in React.js, API integration, and creating a user-friendly web application. Earth Roulette serves as a testament to my ability to leverage technology to promote exploration and facilitate travel planning, further enhanced by the engaging animations created with LottieFiles.',
        image: 'earth-roulette.png',
        index: 4,
        key: 'earth-roulette'
    },
]

export default function Projects() {
    const projects = projectData;
    const [ProjectIndex, setProjectIndex] = useState(0);
    const newIndex = (ProjectIndex + 1) % projects.length;
    const currentContainer = document.querySelector('.project-container');

    const handleNextProject = () => {

        // Schedule class removal with timeout
        setTimeout(() => {
            currentContainer.classList.remove('show-project');
        }, 500);
        setTimeout(() => { // Adjust timeout as needed (in milliseconds)
            currentContainer.classList.add('hidden-project');
        }, 500);

        setTimeout(() => {
            // Update ProjectIndex
            setProjectIndex(newIndex);
        }, 1000)

        // Schedule class addition with timeout (after removal)
        setTimeout(() => {
            if (ProjectIndex === projects[ProjectIndex].index) {
                currentContainer.classList.add('show-project');
            } else {
                currentContainer.classList.add('hidden-project');
            }
        }, 1000);
    };


    return (
        <div className='project-wrapper' >
            <div id='project-container' className={`project-container ${ProjectIndex === projects[ProjectIndex].index ? 'show-project' : 'hidden-project'}`}>
                {<ProjectText
                    projectObj={projects[ProjectIndex]}
                    key={projects[ProjectIndex].name}
                />}
                <Projectimage
                    projectObj={projects[ProjectIndex]}
                    key={ProjectIndex}
                />
            </div>
            <div className='next-button'>
                <button className="btn-arrow btn-arrow-right" title="Next" onClick={handleNextProject}></button>
                <p>Next</p>
            </div>
        </div >
    )
}

function ProjectText({ projectObj }) {
    return (
        <div id='project-text' className='project-text'>
            <TextRandomizer initialText={projectObj.name} />
            <p>{projectObj.description}</p>
        </div>
    )
}


function Projectimage({ projectObj }) {
    const hiddenElemets = document.querySelectorAll('.hidden-sprite')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {


            if (entry.isIntersecting && projectObj.index === 0) {
                entry.target.classList.add('show-sprite')
            } else {
                entry.target.classList.remove('show-sprite')
            }
        });
    });


    hiddenElemets.forEach((el) => observer.observe(el));

    const className = `${projectObj.key}-image`;
    return (
        <div className='project-images'>
            <div className='sprites'>
                <img className='pikachu hidden-sprite' src='pikachu.gif' alt="pikachu-sprite" />
                <img className='charizard hidden-sprite' src='charizard.gif' alt="charizard-sprite" />
                <img className='wartortle hidden-sprite' src='wartortle.gif' alt="wartortle-sprite" />
            </div>
            <div className='project-image'>
                <img className={className} src={projectObj.image} alt='empty-laptop' />
            </div>
        </div>
    )
}