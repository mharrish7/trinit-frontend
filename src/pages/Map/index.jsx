import React, { useState } from "react";
import { MapContainer } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";

const SimpleMap = () => {
  const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(13);
  const googleMapsAPIKey = "AIzaSyCaghUpYlOURZrbfyihIQ1PzP3Y88cOBc8";

  const handleZoomChange = (e) => {
    setZoom(e.target._zoom);
  };

  const handleMapClick = (e) => {
    setMarkerPosition([e.latlng.lat, e.latlng.lng]);
  };

  return (
    <MapContainer
      center={markerPosition}
      zoom={zoom}
      onZoomend={handleZoomChange}
      onClick={handleMapClick}
      style={{ height: "50rem", width: "50rem" }}
    >
      <ReactLeafletGoogleLayer
      apiKey={googleMapsAPIKey}
        type={"satellite"}
      />
    </MapContainer>
  );
};

export default SimpleMap;



//USING LEAFLET



// import { Marker, Popup ,MapContainer, TileLayer} from "react-leaflet";
// import { GoogleLayer } from "react-leaflet-google";

// const MapPage = () => {
    

    
//     return(
//         <div>
//             <h1>Map</h1>
//             <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//                 {/* <ReactLeafletGoogleLayer
//                     googleMapsLoaderConf={{ KEY: "AIzaSyC0QH9aiCXuuRjJe4k5lzAM2bYl-MUhiPk", }}
//                     type={"satellite"}
//                 /> */}
//                 <GoogleLayer
//                 googleMapsLoaderConf={{ apiKey: "AIzaSyC0QH9aiCXuuRjJe4k5lzAM2bYl-MUhiPk", version: "3.44" }}
//                 type={"satellite"} // You can change this to "roadmap", "terrain", etc.
//                 />
//                 {/* <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 /> */}
                
//             </MapContainer>
//         </div>
//     )
// }

// export default MapPage;