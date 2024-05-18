import React from "react";

export default function Observer(options) {
    const [elements, setElements] = React.useState([]); // Store observed elements

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(options.showClass);
                } else {
                    entry.target.classList.remove(options.showClass);
                }
            });
        }, options); // Use options passed in

        elements.forEach((el) => observer.observe(el));

        return () => { // Cleanup on unmount
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [elements, options]); // Re-run on changes to elements or options

    const addElement = (ref) => {
        if (ref.current) {
            setElements([...elements, ref.current]); // Add element to state
        }
    };

    return { addElement };
}