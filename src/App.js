import './index.css';
import Portfolio from './Components/Portfolio';
import { Toggle } from './Components/Toggle';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [isLight, setIsLight] = useState(false)
  const mouseCursorRef = useRef(null) // use ref instead of document finder in React
  const [clientX, setClientX] = useState(window.innerWidth / 2)// Center of screen X
  const [clientY, setClientY] = useState(window.innerHeight / 2); // Center of screen Y

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX || 0;
      const y = e.clientY || 0;
      // always set the variable with useState if dont want problems with errors
      setClientX(x);
      setClientY(y);

      if (mouseCursorRef.current) {
        mouseCursorRef.current.style.left = `${x}px`;
        mouseCursorRef.current.style.top = `${y}px`;
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
      <Toggle
        isChecked={isLight}
        handleChange={() => setIsLight(!isLight)} />
      < Portfolio />
      <div id='mouse-cursor' ref={mouseCursorRef}></div>
    </div>
  );
}

export default App;
