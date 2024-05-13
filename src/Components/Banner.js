import { useRef, useState, useEffect } from 'react'

import './banner.css'

export default function Banner() {
    const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
    const helloWorldRef = useRef(null);
    const [text, setText] = useState('</Hello World>');

    const randomizeText = () => {
        let iterations = 0;

        const interval = setInterval(() => {
            const textArray = text.split('').length;
            const ranText = Array(textArray)
                .fill(null)
                .map((letter, index) => {
                    if (index < iterations) {
                        return text[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
            setText(ranText); // Call setText here to update the state

            if (iterations >= text.length) clearInterval(interval)

            iterations += 1;
        }, 50)
    };

    useEffect(() => {
        const handleMouseOver = () => {
            randomizeText();
        };

        const handleMouseOut = () => {
            setText('</Hello World>'); // Reset text on mouseout (optional)
        };

        const element = helloWorldRef.current;
        if (element) {
            element.addEventListener('mouseover', handleMouseOver);
            // Optionally add mouseout listener for resetting text
            element.addEventListener('mouseout', handleMouseOut);

            // Cleanup function to remove event listeners on unmount
            return () => {
                element.removeEventListener('mouseover', handleMouseOver);
                element.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, []); // Empty dependency array for one-time effect setup

    return (
        <div className='banner'>
            <h1 className='hello-world'
                ref={helloWorldRef}
                onMouseOver={null}>
                {text}
                <h2>I'm a web developer</h2>
            </h1>
        </div >
    )
}

