import React, { useState, useEffect, useRef } from 'react';


const SkillHover = ({ initialText }) => {
    const words = ['</My Skills>', '</HTML>', '</CSS>', '</Ruby>', '</Ruby on Rails>', '</PostgreSQL>', '</Sass>', '</Photoshop>', '</Git>', '</Javascript>', '</Typescript>', '</Bootstrap>', '</Heroku>', '</React>', '</Figma>', '</Canva>', '</Github>', '</And More!>']
    const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
    const textRef = useRef(initialText);
    const [text, setText] = useState(initialText);
    let i = 0

    const randomizeText = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            const textArray = words[i].split('').length;
            const ranText = Array(textArray)
                .fill(null)
                .map((letter, index) => {
                    if (index < iterations) {
                        return textRef.current[index];
                    }
                    return letters[Math.floor(Math.random() * 52)]
                })
                .join("");

            textRef.current = words[i]
            setText(ranText); // Call setText here to update the state
            if (iterations >= words[i].length) clearInterval(interval)

            iterations += 1;
        }, 50)
        i += 1
        if (i >= 18) { i = 0 }
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