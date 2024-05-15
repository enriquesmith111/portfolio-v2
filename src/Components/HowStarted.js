import './how-started.css'
import TextRandomizer from './TextRandomizer'

export default function HowStarted() {
    return (
        <div className='how-started-container'>
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
    return (
        <div>
            <div className='vertical-line'></div>
        </div>
    )
}

function LeftTimeline() {
    return (
        <div className='left-timeline'>
            <div className='timeline-box'>
                <TextRandomizer
                    initialText="</Learn React.js>"
                />
                <p>After perfecting Javascript i followed up with adding React.js to one of my many programming skills, 2024.</p>
            </div>
            <div className='timeline-box'>
                <TextRandomizer
                    initialText="</Join Coding Bootcamp>"
                />
                <p>Decided to pursue a career in Web Development with Le Wagon Bootcamp learning Ruby on Rails, 2023.</p>
            </div>
            <div className='timeline-box'>
                <TextRandomizer
                    initialText="</Graduate College>"
                />
                <p>Graduated from college in Tenerife, Canary Islands, 2018 - 2019.</p>
            </div>
        </div>
    )
}

function RightTimeline() {
    return (
        <div className='right-timeline'>
            <div className='timeline-box'>
                <TextRandomizer
                    initialText="</Learn Javascript>"
                />
                <p>In the bootcamp we only learned basic Javascript so i decided to delve deeper after the bootcamp with Udemy, 2024.</p>
            </div>
            <div className='timeline-box'>
                <TextRandomizer
                    initialText="</Move to London>"
                />
                <p>Moved to London a year after graduating and found a job as a Supermarket Team Lead, 2020 - 2021</p>
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