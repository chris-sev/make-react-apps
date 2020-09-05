import React, { useState, useRef } from 'react';
import './App.css';

// shoudl e inb seperate file
function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default function App() {
  const time = 10;
  const [timeLeft, setTimeLeft] = useState(time);
  const [title, setTitle] = useState('Let the count start!!');
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        reset();
        return 0;
      });
    }, 1000);
  }

  function stop() {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(time);
  }

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}> Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
