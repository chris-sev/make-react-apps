import React from 'react';
import Tabs from './components/Tabs';
import './App.css';
import AddressBar from './components/AddressBar';

export default function App() {
  return (
    <div className="app">
      <div className="browser">
        <Tabs />

        <AddressBar />

        <div className="viewport">
          <>New Tab Page</>
        </div>
      </div>
    </div>
  );
}
