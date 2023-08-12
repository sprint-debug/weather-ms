import React, { useEffect, useState } from 'react';
import { WiCelsius, WiThermometer, WiHumidity } from 'react-icons/wi';
import { FaSun, FaCloudRain, FaCloud } from 'react-icons/fa';
import Map from './Map';

interface WeatherData {
  temp: number;
  humidity: number;
  name: string;
  weather: {
    main: string;
    description?: string; // 필요에 따라 description을 선택적 속성으로 추가
  }[];
}

// 날씨 아이콘 반환 함수
function getWeatherIcon(weatherCondition: string) {
  switch (weatherCondition) {
    case 'Clear':
      return <FaSun />;
    case 'Clouds':
      return <FaCloud />;
    case 'Rain':
      return <FaCloudRain />;
    // 여기에 다른 날씨 조건에 따른 아이콘을 추가할 수 있습니다.
    default:
      return null; // 기본 아이콘 또는 다른 로직을 넣을 수 있습니다.
  }
}

const WeatherDashboard: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [latitude, setLatitude] = useState<string>('37.579617'); // 기본값으로 경복궁 위치 설정
  const [longitude, setLongitude] = useState<string>('126.977041');

  const locations = [
    { name: '서울', lat: '37.5665', lon: '126.9780' },
    { name: '부산', lat: '35.1796', lon: '129.0756' },
    { name: '대전', lat: '36.3504', lon: '127.3845' },
    { name: '대구', lat: '35.8714', lon: '128.6014' },
    { name: '인천', lat: '37.4563', lon: '126.7052' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4a837efbf861cf149de2234026216ba5&units=metric`,
        );
        const json = await response.json();
        setData({
          temp: json.main.temp,
          humidity: json.main.humidity,
          name: json.name,
          weather: [
            {
              main: json.weather[0].main,
              // description을 WeatherData 인터페이스에 추가하고 싶다면 여기에도 추가하세요.
            },
          ],
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
        Latitude:{' '}
        <input value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        Longitude:{' '}
        <input
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
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
          {getWeatherIcon(data.weather[0].main)}
          <p>
            <WiThermometer />
            Temperature: {data.temp}
            <WiCelsius />
          </p>
          <p>
            <WiHumidity />
            Humidity: {data.humidity}%
          </p>
          <p>
            Weather: {data.weather[0].main} ({data.weather[0].description})
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherDashboard;
