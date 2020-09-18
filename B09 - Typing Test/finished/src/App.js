import React, { useState, useEffect } from 'react';
import useCountDown from 'react-countdown-hook';
import './App.css';

// to calculate typing speed
// words typed / minutes
// words typed = characters / 5

const secondsToCount = 10;
const paragraph = `Coding is the best. We are able to build something from scratch. It is literally imagination incarnate. Solving our own problems through coding is one of the coolest things we could do!`;

function findDiff(str1, str2) {
  let diff = [];
  str2.split('').forEach(function (val, i) {
    if (val !== str1.charAt(i)) diff.push(i);
  });
  return diff;
}

export default function App() {
  const [timeLeft, { start, reset }] = useCountDown(secondsToCount * 1000, 100);
  const [typedText, setTypedText] = useState('');
  const [typoIndexes, setTypoIndexes] = useState([]);

  // check to see where the typo is and update typoIndex
  useEffect(() => {
    setTypoIndexes(findDiff(paragraph, typedText));
  }, [typedText]);

  // calculate wpm when timer hits 0
  useEffect(() => {
    if (typedText.length === 0) return;
    if (timeLeft !== 0) return;

    const wpm = calculateWpm();
    return alert(`You type at ${wpm.toFixed(2)} WPM!`);

    function calculateWpm() {
      return (
        ((typedText.length - typoIndexes.length) / 5) * (60 / secondsToCount)
      );
    }
  }, [timeLeft, typedText, typoIndexes]);

  function startTimer() {
    setTypedText('');
    start();
  }

  function resetTimer() {
    setTypedText('');
    reset();
  }

  return (
    <div className="app">
      {/* sidebar */}
      <div className="sidebar">
        <div className="timer">{(timeLeft / 1000).toFixed(2)}</div>
        <button className="start" onClick={startTimer}>
          Start
        </button>
        <button className="reset" onClick={resetTimer}>
          Restart
        </button>
      </div>

      <div className="content">
        {/* show the paragraph */}
        <p>
          {paragraph.split('').map((e, i) => {
            let characterClass = '';
            const hasBeenTyped = typedText.length > i;
            if (hasBeenTyped)
              characterClass = typoIndexes.includes(i)
                ? 'incorrect'
                : 'correct';

            return (
              <span key={i} className={characterClass}>
                {e}
              </span>
            );
          })}
        </p>

        {/* show the textarea */}
        <form>
          <textarea
            value={typedText}
            onChange={(e) => setTypedText(e.target.value)}
            rows="10"
            placeholder="Test your typing skills..."
            disabled={timeLeft === 0}
          />
        </form>
      </div>
    </div>
  );
}
