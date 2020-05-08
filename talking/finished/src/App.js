import React, { useState, useEffect, useCallback } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';

export default function App() {
  const [timers, setTimers] = useState([
    { time: 5, text: 'whatup' },
    { time: 8, text: 'youre cool' },
    { time: 10, text: 'super dope' },
  ]);
  const { seconds, start, reset } = useStopwatch();
  const { speak, supported, speaking, cancel } = useSpeechSynthesis();

  const doSpeak = useCallback((...p) => speak(...p), []);
  const doCancel = useCallback(() => cancel(), []);
  const doReset = useCallback(() => reset(), []);

  useEffect(() => {
    // if theres something to say, do it
    const foundTimer = timers.find((t) => t.time === seconds);
    if (foundTimer) doSpeak({ text: foundTimer.text });

    // if there are no more timers, stop the whole thing
    if (timers[timers.length - 1].time < seconds) doReset();

    return () => doCancel();
  }, [seconds, timers, doSpeak, doCancel, doReset]);

  function updateTimers(index, time, text) {
    const newTimers = [...timers];
    newTimers[index].time = time;
    newTimers[index].text = text;
    setTimers(newTimers);
  }

  function addTimer() {
    const newTimers = [...timers, { time: 100, text: 'yoo' }];
    setTimers(newTimers);
  }

  if (!supported) return <div>browser not supported</div>;

  return (
    <div className="app">
      <h2>Talk the Talk</h2>

      <div className="timers">
        {timers.map((timer, i) => (
          <TimerSlot
            key={i}
            index={i}
            timer={timer}
            updateTimers={updateTimers}
          />
        ))}

        <button onClick={addTimer} className="add-button">
          Add
        </button>
      </div>

      {/* seconds */}
      <h2>{seconds}</h2>

      {/* buttons */}
      <div className="buttons">
        <button onClick={start} className="start-button">
          Start
        </button>
        <button onClick={reset} className="stop-button">
          Stop
        </button>
        {speaking && <p>im speaking...</p>}
      </div>
    </div>
  );
}

function TimerSlot({ index, timer, updateTimers }) {
  const [time, setTime] = useState(timer.time);
  const [text, setText] = useState(timer.text);

  function handleBlur() {
    updateTimers(index, time, text);
  }

  return (
    <form>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(+e.target.value)}
        onBlur={handleBlur}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
      />
    </form>
  );
}
