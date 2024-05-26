import './banner.css'
import BannerText from './BannerText'


export default function Banner() {
    window.addEventListener('load', function () {
        const banner = document.querySelector('.banner h1');
        banner.classList.add('in-view');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    banner.classList.add('in-view');
                } else {
                    banner.classList.remove('in-view');
                }
            });
        });

        observer.observe(banner);
    });

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

