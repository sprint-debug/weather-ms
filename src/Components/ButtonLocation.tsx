import React from 'react';
import './ButtonLocation.css';

interface ButtonLocationProps {
  name: string;
  lat: string;
  lon: string;
  onClick: (lat: string, lon: string) => void;
}

const ButtonLocation: React.FC<ButtonLocationProps> = ({
  name,
  lat,
  lon,
  onClick,
}) => {
  return (
    <button className="button" onClick={() => onClick(lat, lon)}>
      {name}
    </button>
  );
};

export default ButtonLocation;
