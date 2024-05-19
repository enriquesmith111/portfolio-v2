import './index.css';
import Portfolio from './Portfolio';
import Header from './Header';
import { useEffect, useRef, useState } from 'react';
import useLocalStorage from 'use-local-storage';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [isLight, setIsLight] = useLocalStorage('isLight', preference)
  const mouseCursorRef = useRef(null) // use ref instead of document finder in React
  const [clientX, setClientX] = useState(window.innerWidth / 2)// Center of screen X
  const [clientY, setClientY] = useState(window.innerHeight / 2); // Center of screen Y

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX || 0;
      const y = e.clientY || 0;

      // Get the scroll position
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Calculate the actual cursor position relative to the document
      const actualX = x + scrollX;
      const actualY = y + scrollY;

      setClientX(actualX);
      setClientY(actualY);

      if (mouseCursorRef.current) {
        mouseCursorRef.current.style.left = `${actualX}px`;
        mouseCursorRef.current.style.top = `${actualY}px`;
      }
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);
    };
  }, []);

  return (
    <div className="App" data-theme={isLight ? 'light' : 'dark'}>
      <Header
        isChecked={isLight}
        handleChange={() => setIsLight(!isLight)} />
      < Portfolio />
      <div id='mouse-cursor' ref={mouseCursorRef}></div>
    </div>
  );
}

export default App;
