/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, GeoJSON } from "react-leaflet";
import TraceRoute from "./TraceRoute.jsx";
import municipalities from "../assets/Municipios.js";
import states from "../assets/states.js";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import icon from "../assets/marker3.png";

const customIcon = new Icon({
  iconUrl: icon,
  iconSize: [36, 48],
});

const MapTraceRoute = ({
  locationUser,
  closestDirection,
  setDistance,
  handleSetPoint,
  markerPoint,
}) => {
  const PositionPuebla = [19.0431, -98.198];

  const handleFeatureClick = (e) => {
    const featureName = e.target.feature.properties.mun_name;
    handleSetPoint ? handleSetPoint(featureName) : null;
  };

  return (
    <>
      <MapContainer
        center={PositionPuebla}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={states} />
        <GeoJSON
          data={municipalities}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(feature.properties.mun_name);
            layer.on("click", handleFeatureClick);
          }}
        />
        {locationUser && (
          <TraceRoute
            locationUser={locationUser}
            closestDirection={closestDirection}
            setDistance={setDistance}
          />
        )}
        {markerPoint && (
          <Marker
            position={[markerPoint.Latitud, markerPoint.Longitud]}
            icon={customIcon}
          ></Marker>
        )}
      </MapContainer>
    </>
  );
};

export default MapTraceRoute;
