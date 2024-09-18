import './about.css'
import SkillHover from './SkillHover';
import TextRandomizer from './TextRandomizer';

export default function About() {
    const hiddenElemets = document.querySelectorAll('.hidden')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        });
    });

    hiddenElemets.forEach((el) => observer.observe(el));

    return (
        <div id='about-container' className='about-container' >
            <div className='about-text hidden' >
                <AboutText className='hidden' />
                <Skills className='hidden' />
            </div>
            <AboutImage className='hidden' />
        </div>
    )
}

function AboutText() {
    return (
        <>
            <TextRandomizer
                initialText="</About Me>"
            />
            <p style={{ marginBottom: 20 }}>Driven React.js developer, crafting innovative web solutions with a user-centric approach.  My passion for technology extends beyond code, fueling my constant exploration of new languages and frameworks.  When I'm not coding, I explore the world, seeking new cultures and experiences that further inspire my creative problem-solving skills.</p >
        </>
    )
}

function Skills() {
    return (
        <div>
            <SkillHover
                initialText={'<My Skills/>'}
            />
            <Skill />
        </div >
    )
}

function Skill() {
    return (
        <div>
            <div className="icons">
                <i className="devicon-html5-plain-wordmark icon"></i>
                <i className="devicon-css3-plain-wordmark icon"></i>
                <i className="devicon-ruby-plain-wordmark icon"></i>
                <i className="devicon-rails-plain-wordmark icon"></i>
                <i className="devicon-nodejs-plain-wordmark icon"></i>
                <i className="devicon-postgresql-plain-wordmark icon"></i>
                <i className="devicon-sass-original icon"></i>
                <i className="devicon-photoshop-plain icon"></i>
                <i className="devicon-git-plain icon"></i>
            </div>
            <div className='icons'>
                <i className="devicon-javascript-plain icon"></i>
                <i className="devicon-typescript-plain icon"></i>
                <i className="devicon-bootstrap-plain-wordmark icon"></i>
                <i className="devicon-heroku-original-wordmark icon"></i>
                <i className="devicon-netlify-plain icon"></i>
                <i className="devicon-react-original-wordmark icon"></i>
                <i className="devicon-figma-plain icon"></i>
                <i className="devicon-canva-original icon"></i>
                <i className="devicon-github-original icon"></i>
            </div>
        </div>
    )
}

function AboutImage() {
    return (
        <div className='about-image'>
            <img className='laptop-image' src='laptop-code.png' alt='laptop' />
        </div>
    )
}