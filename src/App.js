import React from 'react';
import CityInfoCard from './components/CityInfoCard';
import { cityData } from './data';


const App = () => {
  return (
    <div className="app">
      {cityData.map((city, index) => (
        <CityInfoCard key={index} data={city} />
      ))}
    </div>
  );
};

export default App;
