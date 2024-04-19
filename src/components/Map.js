import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./../Map.css"; // Import custom CSS for map styling

// Custom person icon
const personIcon = new L.Icon({
  iconUrl: "image.png", // Path to the icon image
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Position of the icon anchor
});

const Map = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Fit the map bounds to include the marker
    if (mapRef.current && latitude && longitude) {
      mapRef.current.setView([latitude, longitude], 13);
    }
  }, [latitude, longitude]);

  return (
    <div className="map-container">
      <MapContainer
        center={[latitude || 0, longitude || 0]} // Center based on latitude and longitude, or fallback to (0,0)
        zoom={13} // Zoom level
        style={{ width: "100%", height: "100%" }}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {latitude && longitude && (
          <Marker position={[latitude, longitude]} icon={personIcon}>
            <Popup>
              <strong>Location</strong>
              <br />
              Latitude: {latitude}, Longitude: {longitude}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
