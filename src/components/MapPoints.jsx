/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker} from "react-leaflet";
import { Box } from "@chakra-ui/react";
import { Icon } from "leaflet";
import icon from '../assets/marker3.png'
import "leaflet/dist/leaflet.css";

const customIcon = new Icon({
  iconUrl: icon,
  iconSize: [36, 48],
})

const MapPoints = ({ coordinates }) => {

  const PositionLocation = [coordinates.Latitud, coordinates.Longitud];

  return (
    <Box bg="white" w="full" height="50vh">
      <MapContainer
        center={PositionLocation}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={PositionLocation} icon={customIcon}
        >
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapPoints;
