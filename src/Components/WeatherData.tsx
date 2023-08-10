import React, { useEffect, useState } from 'react';

interface WeatherData {
  temp: number;
  humidity: number;
  name: string;
}

const WeatherDashboard: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [latitude, setLatitude] = useState<string>('37.579617'); // 기본값으로 경복궁 위치 설정
  const [longitude, setLongitude] = useState<string>('126.977041');

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <div>
      <div>
        Latitude: <input value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        Longitude: <input value={longitude} onChange={(e) => setLongitude(e.target.value)} />
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
