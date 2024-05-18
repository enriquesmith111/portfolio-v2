import './contact-form.css'
import TextRandomizer from '../Components/TextRandomizer'

export default function ContactSection() {
    return (
        <div>
            <div id='contact-container' className='contact-container'>
                <div className='contact-text-image'>
                    <ContactText />
                    <ContactImage />
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

function ContactText() {
    return (
        <div>
            <>
                <TextRandomizer
                    initialText="</Let's Connect>"
                />
                <p>Feel free to follow me on LinkedIn, see more of my work or any upcoming projects I might be delving into on Github or even send me an Email enquiry about anything. :D</p>
                <p>Regards,</p>
                <p>Enrique Smith</p>
            </>
        </div>
    )
}

function ContactImage() {
    return (
        <div className='contact-image'>
            <img className='first-contact-image' src='portrait.jpg' alt='portait' />
            <div className='contact-links'>
                <div class="link">
                    <i class="fa fa-envelope"></i>
                    <h3><a href="mailto:enriquesmith111@gmail.com" target="_blank" rel="noreferrer">Email</a></h3>
                </div>
                <div class="link">
                    <i class="devicon-linkedin-plain"></i>
                    <h3><a href="https://www.linkedin.com/in/enrique-smith-dean/" target="_blank" rel="noreferrer">LinkedIn</a></h3>
                </div>
                <div class="link">
                    <i class="devicon-github-original"></i>
                    <h3><a href="https://github.com/enriquesmith111" target="_blank" rel="noreferrer">Github</a></h3>
                </div>
            </div>
        </div >


    )
}

function ContactForm() {
    return (
        <div className='contact-form-container'>
            <div class="form-container">
                <form className='form' action="https://formspree.io/f/xgejrzyl" method="post">
                    <TextRandomizer initialText="</Contact Me>" />
                    <div className='name-email'>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <input type='subject' name='subject' placeholder='Subject' />
                    <textarea name="message" placeholder="Message" required />
                    <input class="form-submit" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}