import './how-started.css'
import TextRandomizer from '../Components/TextRandomizer'

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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis earum perferendis, saepe aliquid culpa ut delectus officia laborum in non amet nemo atque quibusdam dolorem ad impedit, vitae velit voluptates aspernatur eos nesciunt maiores. Numquam repellat atque unde delectus deserunt distinctio, exercitationem perferendis, vero corrupti facilis sed quae eum, quibusdam ducimus mollitia. Natus eos rem praesentium est quos incidunt aut quisquam tempore ipsam doloremque, illo recusandae iusto sed blanditiis dignissimos fuga voluptas laborum molestias optio, deserunt eius! Dignissimos ipsa qui, magnam, tempora vel placeat inventore suscipit mollitia maxime quam eveniet natus error. Quos, in consequuntur totam ducimus maiores harum quod?</p>
        </div>
    )
}