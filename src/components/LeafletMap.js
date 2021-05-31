import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LeafletMap = () => {
  if (typeof window === "undefined") return null;

  return (
    <MapContainer center={[32.408329, 35.274535]} zoom={16}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[32.408329, 35.274535]}>
        <Popup>موقعنا</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
