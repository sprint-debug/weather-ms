import React, { useEffect, useState } from 'react';
import './Map.css';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  latitude: string;
  longitude: string;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const { kakao } = window;
    if (kakao && kakao.maps) {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(
          parseFloat(latitude),
          parseFloat(longitude),
        ),
        level: 3,
      };
      const createdMap = new kakao.maps.Map(container, options);
      setMap(createdMap);
    }
  }, []);

  useEffect(() => {
    if (map) {
      const { kakao } = window;
      map.setCenter(
        new kakao.maps.LatLng(parseFloat(latitude), parseFloat(longitude)),
      );
    }
  }, [latitude, longitude, map]);

  return <div id="map" className="map" />;
};

export default Map;
