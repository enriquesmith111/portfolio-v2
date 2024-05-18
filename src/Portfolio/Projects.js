import React, { useState } from 'react';
import './projects.css'
import TextRandomizer from '../Components/TextRandomizer'

const projectData = [
    {
        name: '</Mokepon>',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis earum perferendis, saepe aliquid culpa ut delectus officia laborum in non amet nemo atque quibusdam dolorem ad impedit, vitae velit voluptates aspernatur eos nesciunt maiores. Numquam repellat atque unde delectus deserunt distinctio, exercitationem perferendis, vero corrupti facilis sed quae eum, quibusdam ducimus mollitia. Natus eos rem praesentium est quos incidunt aut quisquam tempore ipsam doloremque, illo recusandae iusto sed blanditiis dignissimos fuga voluptas laborum molestias optio, deserunt eius! Dignissimos ipsa qui, magnam, tempora vel placeat inventore suscipit mollitia maxime quam eveniet natus error. Quos, in consequuntur totam ducimus maiores harum quod?',
        image: 'empty-laptop.png',
        index: 0,
        key: 'mokepon'
    },
    {
        name: '</Blog?',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, est quibusdam hic beatae neque atque maiores facere quidem ex quae eos quis nam error odio!',
        image: 'empty-laptop.png',
        index: 1,
        key: 'blog'
    },
    {
        name: '</Fit-Squad>',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae porro tempore cum temporibus? Laboriosam, odio? Porro, in accusantium! Voluptas, quis?',
        image: 'empty-laptop.png',
        index: 2,
        key: 'fit-squad'
    }
]

export default function Projects() {
    const projects = projectData;
    const [ProjectIndex, setProjectIndex] = useState(0);
    const newIndex = (ProjectIndex + 1) % projects.length;
    const currentContainer = document.querySelector('.project-container');

    const handleNextProject = () => {

        // Schedule class removal
        currentContainer.classList.remove('show-project');

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