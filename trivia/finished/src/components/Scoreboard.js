import React, { useState, useEffect } from 'react';

export default function Scoreboard({ isCorrect }) {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    if (isCorrect === null) return;

    if (isCorrect) setCorrect((score) => score + 1);
    else setWrong((score) => score + 1);
  }, [isCorrect]);

  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{wrong}</strong>
        <span>wrong</span>
      </div>
      <div className="correct">
        <strong>{correct}</strong>
        <span>correct</span>
      </div>
    </div>
  );
}
