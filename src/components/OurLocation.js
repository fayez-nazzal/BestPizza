import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
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
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTlt13Djn5NXeyMWn_9Su-Aj4ynUxeupA" }}
          defaultCenter={{
            lat: 32.408329,
            lng: 35.274535,
          }}
          defaultZoom={17}
          yesIWantToUseGoogleMapApiInternals
        >
          <LocationPin lat={32.408329} lng={35.274535} />
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default OurLocation;
