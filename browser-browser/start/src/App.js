import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <div className="browser">
        <Tabs />

        <div className="address-bar">
          <form>
            <input type="text" name="url" />
          </form>
        </div>

        <div className="viewport">
          <>Tabs Go Here</>
        </div>
      </div>
    </div>
  );
}
