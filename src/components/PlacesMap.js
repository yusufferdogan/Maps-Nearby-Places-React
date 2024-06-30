import React from 'react';
import {
  APIProvider,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import { useSelector } from "react-redux";

const PlacesMap = () => {
  const { places } = useSelector((state) => state.places || { places: [] });
  const { center } = useSelector((state) => state.center);
  const apiKey = process.env.REACT_APP_API_KEY;

  const locations = places?.data?.places.map((place) => ({
    key: place.placeId,
    location: {
      lat: place.latitude,
      lng: place.longitude,
    },
  })) || [];
  console.log(places)
  console.log(locations)
  console.log(center)
  console.log('API Key:', apiKey);

  return (
    <APIProvider
      apiKey={apiKey}
    >
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: 40.9781815, lng: 29.075794 }}
        center = {center}
        initialViewState={{
          latitude: 40.9905539,
          longitude: 29.0195239,
          zoom: 100,
        }}
        controller={true}
        style={{ width: "100%", height: "700px" }}
        
      >
      {locations.map((place) => (
          <Marker
            key={place.key}
            position={place.location}
          />
        ))
      }


      </Map>
    </APIProvider>
  );
};


export default PlacesMap;
