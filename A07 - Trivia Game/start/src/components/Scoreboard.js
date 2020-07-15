import React from 'react';

export default function Scoreboard() {
  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>0</strong>
        <span>wrong</span>
      </div>
      <div className="correct">
        <strong>0</strong>
        <span>correct</span>
      </div>
    </div>
  );
}
