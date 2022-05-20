import "leaflet/dist/images/layers-2x.png";
import "leaflet/dist/images/layers.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { FunctionComponent } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { StyledMap } from "./styles";

export interface mapTypes {
  center: [lat: number, lon: number];
  zoom?: number;
  markers: Array<mapMarkers>;
}

export interface mapMarkers {
  lat: number;
  lon: number;
  title: string;
  visited: boolean;
  visits: number;
  rating: number;
}
const Map: FunctionComponent<mapTypes> = ({ center, markers, zoom = 13 }) => {
  return (
    <StyledMap>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker position={[marker.lat, marker.lon]} key={marker.title}>
            <Popup>{`${marker.title}\nVisited ${
              marker.visits
            } time(s)\nRating: ${new Array(marker.rating + 1).join(
              "⭐"
            )}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </StyledMap>
  );
};

export default Map;
