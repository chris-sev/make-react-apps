import React, { useEffect, useRef } from 'react';
import './App.css';
import useMovement from './useMovement';

export default function App() {
  const canvasRef = useRef(null);
  const linkDownRef = useRef(null);
  const linkUpRef = useRef(null);
  const linkRightRef = useRef(null);
  const linkLeftRef = useRef(null);
  const { x, y, direction, move } = useMovement();

  // set the height and width of canvas
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  // move the box if x or y changes
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // context.fillRect(x, y, 100, 100);

    let theLinkRef;
    if (direction === 'down') theLinkRef = linkDownRef;
    if (direction === 'up') theLinkRef = linkUpRef;
    if (direction === 'left') theLinkRef = linkLeftRef;
    if (direction === 'right') theLinkRef = linkRightRef;

    context.drawImage(theLinkRef.current, x, y);
  }, [x, y]);

  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button onClick={() => move('up')}>Up</button>
        <button onClick={() => move('left')}>Left</button>
        <button onClick={() => move('down')}>Down</button>
        <button onClick={() => move('right')}>Right</button>
      </div>

      <div className="images">
        <img
          ref={linkDownRef}
          src="https://i.imgur.com/JYUB0m3.png"
          alt="Down"
        />
        <img
          ref={linkRightRef}
          src="https://i.imgur.com/GEXD7bk.gif"
          alt="Right"
        />
        <img ref={linkUpRef} src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img
          ref={linkLeftRef}
          src="https://i.imgur.com/4LGAZ8t.gif"
          alt="Left"
        />
      </div>
    </div>
  );
}
