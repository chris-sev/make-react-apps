import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <SignupForm />
      </div>
    </Router>
  );
}
