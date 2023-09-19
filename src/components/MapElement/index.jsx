import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./style.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const MapElement = () => {
    const latitude = 43.28016259992186;
    const longitude = -2.169856958079336;
    const display_name = "ZKE Halterofilia";
    const ZKEPos = [latitude, longitude];

    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map) {
          setInterval(function () {
              map.invalidateSize();
          }, 100);
        }
    }, [map]);


  return (
    <div className="mapBox">
      <MapContainer center={ZKEPos} zoom={20}
        scrollWheelZoom={true} style={{ height: "50vh", width: "50vw" }} whenCreated={setMap}
        >
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
            contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        <Marker  position={ZKEPos}>
            <Popup>{display_name}</Popup>
        </Marker>
      </MapContainer>
    </div> 
  );
}
        