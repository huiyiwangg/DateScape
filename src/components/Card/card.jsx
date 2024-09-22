import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './card.scss';

const Card = ({ name, address, description, longitude, latitude }) => {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: `map-${name}`,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [longitude, latitude],
      zoom: 15,
    });

    new maplibregl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);

    return () => map.remove();
  }, [longitude, latitude, name]);

  return (
    <div className="card">
      <h3 className='card__title'>{name}</h3>
      <p className='card__address'>Address: {address}</p>
      <p className='card__description'>Description: {description}</p>
      
      <div id={`map-${name}`} className="map-container"></div>

      <p className='card__location'>Location: {longitude}, {latitude}</p>
    </div>
  );
};

export default Card;
