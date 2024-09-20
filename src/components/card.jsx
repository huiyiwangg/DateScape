import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './card.scss'

const Card = ({ name, address, description, longitude, latitude }) => {
  return (
    <div className="card">
      <h3 className='card__title'>{name}</h3>
      <p className='card__address'>Address: {address}</p>
      <p className='card__description'>Description: {description}</p>
    </div>
  );
};

export default Card;