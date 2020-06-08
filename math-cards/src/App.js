import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app">
      {/* math card */}
      <div className="math-card">
        <div className="spot">1</div>
        <div className="spot">1</div>
        <div className="spot">+</div>
        <div className="total">2</div>
      </div>

      <div>
        <div className="cards numbers">
          {Array(10)
            .fill(0)
            .map((n, i) => (
              <div key={i} className="card">
                {i + 1}
              </div>
            ))}
        </div>

        <div className="cards operators">
          {['*', '-', '+', '/'].map((o, i) => (
            <div key={i} className="card">
              {o}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
