import React from 'react';
import './popup.scss';
import date from "../../assets/gif/snoopy-date.gif"

const Popup = ({ name, address, onClose }) => {
  return (
    <div className="popup">
      <div className="popup__content">
        <h1 className='popup__title'>Send This to your Date</h1>
        <img src={date} alt="snoopy date" />
        <h3 className='popup__note'>Hey! Would you like to go a date to {name} located at {address} with me?</h3>
        <button className="popup__close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
