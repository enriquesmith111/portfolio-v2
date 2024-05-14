import './banner.css'
import TextRandomizer from './TextRandomizer'

export default function Banner() {

    return (
        <div className='banner'>
            <div className='container'>
                <TextRandomizer
                    initialText={'</Hello World>'}
                />
                <h2>I'm a web developer</h2>
            </div>
        </div >
    )
}

