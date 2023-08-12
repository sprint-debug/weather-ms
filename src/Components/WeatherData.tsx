import React, { useEffect, useState } from 'react';
import ButtonLocation from './ButtonLocation';
import Text from './Text';
import TextInput from './TextInput';
import { WiCelsius, WiThermometer, WiHumidity } from 'react-icons/wi';
import { FaSun, FaCloudRain, FaCloud } from 'react-icons/fa';
import Map from './Map';
import ButtonContainer from './ButtonContainer';
import TextInputContainer from './TextInputContainer';
import PageWrapper from './PageWrapper';
import Card from './Card';
import IconContainer from './IconContainer';
import WeatherList from './WeatherList';

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

  const weatherItems = data
    ? [
        { icon: getWeatherIcon(data.weather[0].main), title: data.name },
        {
          icon: <WiThermometer />,
          title: '온도',
          description: `${data.temp}°C`,
        },
        {
          icon: <WiHumidity />,
          title: '습도',
          description: `${data.humidity}%`,
        },
        {
          title: '날씨',
          description: `${data.weather[0].main} (${data.weather[0].description})`,
        },
      ]
    : [];

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
    <PageWrapper>
      <Map latitude={latitude} longitude={longitude} />

      <ButtonContainer>
        {locations.map((location, index) => (
          <ButtonLocation
            key={index}
            name={location.name}
            lat={location.lat}
            lon={location.lon}
            onClick={(lat, lon) => {
              setLatitude(lat);
              setLongitude(lon);
            }}
          />
        ))}
      </ButtonContainer>

      {data ? (
        <Card>
          <WeatherList items={weatherItems} />
        </Card>
      ) : (
        <p>Loading...</p>
      )}

      <Text content="원하는 곳이 없으시다면 위도와 경도를 입력해 해당 지역의 날씨를 확인하세요." />

      <TextInputContainer>
        <TextInput
          label="위도:"
          name="latitude"
          id="latitude"
          value={latitude}
          onChange={setLatitude}
        />
        <TextInput
          label="경도:"
          name="longtitude"
          id="longtitude"
          value={longitude}
          onChange={setLongitude}
        />
      </TextInputContainer>
    </PageWrapper>
  );
};

export default WeatherDashboard;
