import './toggle.css'
import './header.css'
import TextRandomizer from './TextRandomizer'
import useLocalStorage from 'use-local-storage'

export default function Header() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [isLight, setIsLight] = useLocalStorage('isLight', preference)

    return (
        <header>
            <div className="header-enrique" id="header-enrique">
                <h1><a href="#">
                    <TextRandomizer
                        initialText="</Enrique>"
                    /></a>
                </h1>
            </div>
            <div className="header-links">
                <h3><a href="#about-container">About Me</a></h3>
                <h3><a href="#how-started-container">Story</a></h3>
                <h3><a href="#project-container">Projects</a></h3>
                <h3><a href="#certificate-container">Certificates</a></h3>
                <h3><a href="#contact-container">Contact</a></h3>
            </div>
            <Toggle isChecked={isLight}
                handleChange={() => setIsLight(!isLight)} />
        </header>
    )
}

// https://www.youtube.com/watch?v=sy-rRtT84CQ&t=1s
const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className='toggle-container'>
            <input
                type='checkbox'
                id='check'
                className='toggle'
                onChange={handleChange}
                checked={isChecked} />
            <label htmlFor='check'>{isChecked ? 'Light Mode' : 'Dark Mode'}</label>
        </div>
    );
}