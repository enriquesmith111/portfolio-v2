import './banner.css'
import BannerText from './BannerText'


export default function Banner() {

    return (
        <div className='banner'>
            <div className='container'>
                <BannerText
                    initialText={'</Hello World>'}
                />
                <h2>I'm a web developer!</h2>
            </div>
        </div >
    )
}

