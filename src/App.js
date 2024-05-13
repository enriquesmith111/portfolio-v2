import './index.css';
import Portfolio from './Components/Portfolio';
import { useState } from 'react';

function App() {
  const mouseCursor = document.getElementById('mouse-cursor');
  const [clientX, setClientX] = useState(window.innerWidth / 2)// Center of screen X
  const [clientY, setClientY] = useState(window.innerHeight / 2); // Center of screen Y
  const RETRY_TIMEOUT = 100; // Time in milliseconds to wait before retrying

  document.body.onpointermove = event => {
    try { // Use an empty object as default
      mouseCursor.style.left = `${clientX}px`;
      mouseCursor.style.top = `${clientY}px`;
      setClientX(clientX)
      setClientY(clientY)
    } catch (error) {
      // Set default coordinates and schedule retry
      mouseCursor.style.left = `${setClientX}px`;
      mouseCursor.style.top = `${setClientY}px`;

      setTimeout(() => {
        // Simulate another pointermove event (replace if needed for specific event)
        document.body.dispatchEvent(new PointerEvent('pointermove'));
      }, RETRY_TIMEOUT);

      console.warn("Failed to update cursor position:", error);
    }
  };


  return (
    <div className="App">
      < Portfolio />
      <div id='mouse-cursor' disabled></div>
    </div>
  );
}

export default App;
