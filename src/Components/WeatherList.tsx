import React from 'react';
import './WeatherList.css';
import IconContainer from './IconContainer';

interface WeatherListProps {
  items: {
    icon?: React.ReactNode;
    title: string;
    description?: string;
  }[];
}

const WeatherList: React.FC<WeatherListProps> = ({ items }) => {
  return (
    <ul className="listWeather">
      {items.map((item, index) => (
        <li key={index}>
          {item.icon && <IconContainer>{item.icon}</IconContainer>}
          {item.description ? (
            <>
              {item.title}: {item.description}
            </>
          ) : (
            <h2>{item.title}</h2>
          )}
        </li>
      ))}
    </ul>
  );
};

export default WeatherList;
