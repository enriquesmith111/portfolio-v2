import './about.css'
import SkillHover from './SkillHover';
import TextRandomizer from './TextRandomizer'; // Assuming TextRandomizer is in the same directory

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
        <div className='about-container' >
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis earum perferendis, saepe aliquid culpa ut delectus officia laborum in non amet nemo atque quibusdam dolorem ad impedit, vitae velit voluptates aspernatur eos nesciunt maiores. Numquam repellat atque unde delectus deserunt distinctio, exercitationem perferendis, vero corrupti facilis sed quae eum, quibusdam ducimus mollitia. Natus eos rem praesentium est quos incidunt aut quisquam tempore ipsam doloremque, illo recusandae iusto sed blanditiis dignissimos fuga voluptas laborum molestias optio, deserunt eius! Dignissimos ipsa qui, magnam, tempora vel placeat inventore suscipit mollitia maxime quam eveniet natus error. Quos, in consequuntur totam ducimus maiores harum quod?</p>
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
            <div class="icons">
                <i class="devicon-html5-plain-wordmark icon"></i>
                <i class="devicon-css3-plain-wordmark icon"></i>
                <i class="devicon-ruby-plain-wordmark icon"></i>
                <i class="devicon-rails-plain-wordmark icon"></i>
                <i class="devicon-postgresql-plain-wordmark icon"></i>
                <i class="devicon-sass-original icon"></i>
                <i class="devicon-photoshop-plain icon"></i>
            </div>
            <div className='icons'>
                <i class="devicon-javascript-plain icon"></i>
                <i class="devicon-typescript-plain icon"></i>
                <i class="devicon-bootstrap-plain-wordmark icon"></i>
                <i class="devicon-heroku-original-wordmark icon"></i>
                <i class="devicon-react-original-wordmark icon"></i>
                <i class="devicon-figma-plain icon"></i>
                <i class="devicon-canva-original icon"></i>
            </div>
        </div>
    )
}

function AboutImage() {
    return (
        <div>
            <img className='laptop-image' src='laptop-code.png' alt='laptop' />
        </div>
    )
}