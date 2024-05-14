import React, { useState, useEffect, useRef } from 'react';


const SkillHover = ({ initialText }) => {
    const words = ['</HTML>', '</CSS>', '</Ruby>', '</Ruby on Rails>', '</PostgreSQL>', '</Sass>', '</Photoshop>', '</Javascript>', '</Typescript>', '</Bootstrap>', '</Heroku>', '</React>', '</Figma>', '</Canva>']
    const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
    const textRef = useRef(null);
    const [text, setText] = useState(initialText);

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

                    return letters[Math.floor(Math.random() * 52)]
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

        const element = textRef.current;
        if (element) {
            element.addEventListener('mouseover', handleMouseOver);

            return () => {
                element.removeEventListener('mouseover', handleMouseOver);
            };
        }
    }, []); // Empty dependency array for one-time effect setup // Re-run useEffect if randomizeOnHover changes

    return (
        <h1 ref={textRef}>{text}</h1>
    );
};

export default SkillHover;