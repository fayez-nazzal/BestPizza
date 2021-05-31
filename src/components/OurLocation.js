import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import LeafletMap from "./LeafletMap";
import SectionHeader from "./SectionHeader";

const OurLocation = () => {
  return (
    <section
      id="location"
      className="flex flex-col justify-center px-8 py-16 md:px-16 our-location"
    >
      {" "}
      <SectionHeader text="موقعنا" />
      <p className="m-8 text-xl text-center text-white md:text-2xl md:h-14">
        جنين - قباطية, الحارة الغربية - بجانب معصرة الفايز
      </p>
      <div className="w-full h-110">
        <LeafletMap />
      </div>
    </section>
  );
};

export default OurLocation;
