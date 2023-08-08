import React, { useEffect, useState } from 'react';

interface WeatherData {
  temp: number;
  humidity: number;
  name: string;
}

const WeatherDashboard: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=73c0371a75f1ece71a255115ac4f3443&units=metric`);
        const json = await response.json();
        setData({
          temp: json.main.temp,
          humidity: json.main.humidity,
          name: json.name,
        });
      } catch (err) {
        console.error(err);
      }
    });
  }, []);

  return (
    <div>
      <div>
          <h2>동네날씨</h2>
          <p>Temperature: 10°C</p>
          <p>Humidity: 100%</p>
        </div>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <p>Temperature: {data.temp}°C</p>
          <p>Humidity: {data.humidity}%</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherDashboard;
