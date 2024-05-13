import './about.css'
import TextRandomizer from './TextRandomizer'; // Assuming TextRandomizer is in the same directory


export default function About() {
    return (
        <div className='about-container'>
            <div className='about-text'>
                <AboutText />
                <Skills />
            </div>
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
            <TextRandomizer
                initialText={'<My Skills/>'}
            />
            <div class="icons">
                <i class="devicon-ruby-plain"></i>
                <i class="devicon-rails-plain"></i>
                <i class="devicon-postgresql-plain-wordmark"></i>
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-sass-original"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-typescript-plain"></i>
                <i class="devicon-bootstrap-plain-wordmark"></i>
                <i class="devicon-heroku-original-wordmark"></i>
            </div>
        </div>
    )
}