import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <canvas />

      <div className="arrows">
        <button>Up</button>
        <button>Left</button>
        <button>Down</button>
        <button>Right</button>
      </div>

      <div className="images">
        <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  );
}
