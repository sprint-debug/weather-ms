import React, { useEffect, useState } from 'react';
import Map from './Map';

interface WeatherData {
  temp: number;
  humidity: number;
  name: string;
}

const WeatherDashboard: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [latitude, setLatitude] = useState<string>('37.579617'); // 기본값으로 경복궁 위치 설정
  const [longitude, setLongitude] = useState<string>('126.977041');

  const locations = [
    { name: "서울", lat: "37.5665", lon: "126.9780" },
    { name: "부산", lat: "35.1796", lon: "129.0756" },
    { name: "대전", lat: "36.3504", lon: "127.3845" },
    { name: "대구", lat: "35.8714", lon: "128.6014" },
    { name: "인천", lat: "37.4563", lon: "126.7052" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4a837efbf861cf149de2234026216ba5&units=metric`);
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
      
      <Map latitude={latitude} longitude={longitude} />

      <div>
      {locations.map((location, index) => (
        <button 
          key={index}
          onClick={() => {
            setLatitude(location.lat);
            setLongitude(location.lon);
          }}
        >
          {location.name}
        </button>
      ))}
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
