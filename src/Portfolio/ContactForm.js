import './contact-form.css'
import TextRandomizer from '../Components/TextRandomizer'
import { useEffect, useState } from 'react';

export default function ContactSection() {
    return (
        <div className='contact-container'>
            <ContactText />
            <ContactForm />
        </div>
    )
}

function ContactText() {
    return (
        <div>
            <>
                <TextRandomizer
                    initialText="</About Me>"
                />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda officia vitae nobis maiores tenetur modi a excepturi reiciendis deleniti. Quos, neque cum! At corporis ut, cumque ea excepturi rem?</p>
            </>
        </div>
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