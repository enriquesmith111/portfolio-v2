import './how-started.css'
import TextRandomizer from './TextRandomizer'

export default function HowStarted() {
    return (
        <div id='how-started-container' className='how-started-container'>
            <div>
                <Timeline />
            </div>
            <HowStartedText />
        </div>
    )
}

function Timeline() {
    return (
        <div className='how-started-timeline'>
            <LeftTimeline />
            <VerticalLine />
            <RightTimeline />
        </div>
    )
}

function VerticalLine() {
    const hiddenElemets = document.querySelectorAll('.hidden-line')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show-line')
            } else {
                entry.target.classList.remove('show-line')
            }
        });
    });

    hiddenElemets.forEach((el) => observer.observe(el));

    return (
        <div>
            <div className='vertical-line hidden-line'></div>
        </div>
    )
}

function LeftTimeline() {
    const hiddenElemets = document.querySelectorAll('.hidden-timeline-left')

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
        <div className='left-timeline'>
            <div className='timeline-box hidden-timeline-left'>
                <TextRandomizer
                    initialText="</Learn React.js>"
                />
                <p>After perfecting Javascript i followed up with adding React.js to one of my many programming skills, 2024.</p>
            </div>
            <div className='timeline-box hidden-timeline-left'>
                <TextRandomizer
                    initialText="</Join Coding Bootcamp>"
                />
                <p>Decided to pursue a career in Web Development with Le Wagon Bootcamp learning Ruby on Rails, 2023.</p>
            </div>
            <div className='timeline-box hidden-timeline-left'>
                <TextRandomizer
                    initialText="</Graduate College>"
                />
                <p>Graduated from college in Tenerife, Canary Islands, 2018 - 2019.</p>
            </div>
        </div>
    )
}

function RightTimeline() {
    const hiddenElemets = document.querySelectorAll('.hidden-timeline-right')

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
        <div className='right-timeline'>
            <div className='timeline-box hidden-timeline-right' >
                <TextRandomizer
                    initialText="</Learn Javascript>"
                />
                <p>In the bootcamp we only learned basic Javascript so i decided to delve deeper after the bootcamp with Udemy, 2024.</p>
            </div>
            <div className='timeline-box hidden-timeline-right'>
                <TextRandomizer
                    initialText="</Move to London>"
                />
                <p>Moved to London a year after graduating and found a job as a Supermarket Team Lead, 2020 - 2021.</p>
            </div>
        </div>
    )
}

function HowStartedText() {
    return (
        <div className='how-started-text'>
            <TextRandomizer
                initialText="</How it Started>"
            />
            <p>In 2018, I graduated from college in Tenerife (Canary Islands). A year later, I moved to London and thrived as a Supermarket Team Lead (2020-2021). But my true passion resided in the world of tech. In 2023, I enrolled in Le Wagon Bootcamp to pursue web development. There, I dove deep into Ruby and its powerful framework, Ruby on Rails. However, my hunger for programming knowledge didn't stop there. To further expand my skillset and become a well-rounded web developer, I tackled Javascript through Udemy in 2024. After perfecting my Javascript foundation, I recently added the popular front-end library, React.js, to my repertoire, to make this portfolio with. </p>
        </div>
    )
}