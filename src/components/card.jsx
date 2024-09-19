import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Card = ({ name, address, description, longitude, latitude }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};

export default Card;