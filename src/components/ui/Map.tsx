"use client";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const locations = [
  {
    name: "Blueberry Gardens - Cxunkuri",
    position: { lat: 42.349871, lng: 41.883386 },
  },
  {
    name: "Blueberry Gardens - Poti",
    position: { lat: 42.141396, lng: 41.676229 },
  }
];

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 42.245634,
  lng: 41.779808
};

export default function Map() {
//   const handleMarkerClick = (location: typeof locations[0]) => {
//     window.open(`https://www.google.com/maps?q=${location.position.lat},${location.position.lng}`);
//   };

  return (
    // <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
    //   <GoogleMap
    //     mapContainerStyle={mapContainerStyle}
    //     center={center}
    //     zoom={10}
    //   >
    //     {locations.map((location, index) => (
    //       <Marker
    //         key={index}
    //         position={location.position}
    //         onClick={() => handleMarkerClick(location)}
    //         title={location.name}
    //       />
    //     ))}
    //   </GoogleMap>
    // </LoadScript>
    <p>Map is under construction </p>
  )
}
