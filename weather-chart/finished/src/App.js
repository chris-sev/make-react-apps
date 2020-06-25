import React, { useState } from 'react';
import GeoForm from './components/GeoForm';
import WeatherChart from './components/WeatherChart';
import './App.css';

export default function App() {
  const [latLng, setLatLng] = useState(null);

  return (
    <div className="app">
      {/* form goes here */}
      <GeoForm setLatLng={setLatLng} />

      {/* chart goes here */}
      {latLng && <WeatherChart latLng={latLng} />}
    </div>
  );
}
