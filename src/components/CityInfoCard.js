import React from 'react';
import "./CityInfo.css"

const CityInfoCard = ({ data }) => {
  const { name, district, photo, population, area } = data;

  return (
    <div className="city-info-card">
      <h2>{name}</h2>
      <h3 className='okres'>{district}</h3>
      <img src={photo} alt={`${name} photo`} />
      <p className='populacia'>Populácia: {population}</p>
      <p className='rozloha'>Rozloha: {area} km2</p>
    </div>
  );
};

export default CityInfoCard;