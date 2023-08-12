import React, { useEffect, useState } from 'react';

declare global {
    interface Window {
        kakao: any;
    }
}

interface MapProps {
    latitude: string;
    longitude: string;
}

const mapStyle = {
    width: '500px',
    height: '500px',
    border: '1px solid red'
};

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
    const [map, setMap] = useState<any>(null);

    useEffect(() => {
        const { kakao } = window;
        if (kakao && kakao.maps) {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(parseFloat(latitude), parseFloat(longitude)),
                level: 3
            };
            const createdMap = new kakao.maps.Map(container, options);
            setMap(createdMap);
        }
    }, []);

    useEffect(() => {
        if (map) {
            const { kakao } = window;
            map.setCenter(new kakao.maps.LatLng(parseFloat(latitude), parseFloat(longitude)));
        }
    }, [latitude, longitude, map]);

    return (
        <div>
            <div id="map" style={mapStyle} />
        </div>
    );
};


export default Map;
