import React from 'react';
import './mokepon-project.css'
import TextRandomizer from '../Components/TextRandomizer'

export default function MokeponProject() {
    return (
        <div>
            <div className='project-container'>
                <ProjectMokepon />
            </div>
        </div>
    )
}

function ProjectMokepon() {

    return (
        <div className='mokepon-project'>
            <ProjectText />
            <ProjectImage />
        </div>
    );
}

function ProjectText() {
    return (
        <div className='mokepon-text'>
            <TextRandomizer
                initialText="</Mokepon>"
            />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis earum perferendis, saepe aliquid culpa ut delectus officia laborum in non amet nemo atque quibusdam dolorem ad impedit, vitae velit voluptates aspernatur eos nesciunt maiores. Numquam repellat atque unde delectus deserunt distinctio, exercitationem perferendis, vero corrupti facilis sed quae eum, quibusdam ducimus mollitia. Natus eos rem praesentium est quos incidunt aut quisquam tempore ipsam doloremque, illo recusandae iusto sed blanditiis dignissimos fuga voluptas laborum molestias optio, deserunt eius! Dignissimos ipsa qui, magnam, tempora vel placeat inventore suscipit mollitia maxime quam eveniet natus error. Quos, in consequuntur totam ducimus maiores harum quod?</p>
        </div>
    )
}

function ProjectImage() {
    const hiddenElemets = document.querySelectorAll('.hidden-sprite')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show-sprite')
            } else {
                entry.target.classList.remove('show-sprite')
            }
        });
    });

    hiddenElemets.forEach((el) => observer.observe(el));

    return (
        <div className='project-images'>
            <div className='sprites'>
                <img className='pikachu hidden-sprite' src='pikachu.gif' alt="pikachu-sprite" />
                <img className='charizard hidden-sprite' src='charizard.gif' alt="charizard-sprite" />
                <img className='wartortle hidden-sprite' src='wartortle.gif' alt="wartortle-sprite" />
            </div>
            <div className='project-image'>
                <img src='empty-laptop.png' alt='empty-laptop' />
            </div>
        </div>
    )
}