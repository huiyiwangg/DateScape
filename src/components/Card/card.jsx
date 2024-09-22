import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import pin from '../../assets/logo/snoopy-pin.png';
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

    map.on('load', () => {
      const img = new Image(300, 300);
      img.src = pin;

      img.onload = () => {
        map.addImage('snoopypin', img);

        map.addSource('point', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': [longitude, latitude],
                },
              },
            ],
          },
        });

        map.addLayer({
          'id': 'points',
          'type': 'symbol',
          'source': 'point',
          'layout': {
            'icon-image': 'snoopypin',
            'icon-size': 0.25,
          },
        });
      };
    });

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [longitude, latitude, name]);

  return (
    <div className="card">
      <div id={`map-${name}`} className="map-container"></div>
      <h3 className='card__title'>{name}</h3>
      <h3 className='card__address'>{address}</h3>
      <p className='card__description'>{description}</p>
    </div>
  );
};

export default Card;
