import React, { useState, useCallback } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow
} from "@vis.gl/react-google-maps";
import { useSelector } from "react-redux";

const PlacesMap = () => {
  const { places } = useSelector(
    (state) => state.places || { places: [] }
  );
  const { center } = useSelector((state) => state.center);
  const apiKey = process.env.REACT_APP_API_KEY;
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMarkerClick = useCallback((place) => {
    setSelectedPlace(place);
  }, []);

  console.log("places.",places);
  console.log("center", center);
  console.log("selectedPlace:", selectedPlace);

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: 40.9781815, lng: 29.075794 }}
        center={center}
        initialViewState={{
          latitude: 40.9905539,
          longitude: 29.0195239,
          zoom: 100,
        }}
        controller={true}
        style={{ width: "100%", height: "700px" }}
      >
        {places.data.places.map((place) => (
          <Marker
            key={place.placeId}
            position={{lat: place.latitude, lng: place.longitude}}
            onClick={() => handleMarkerClick(place)}
          />
        ))}
        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.latitude,
              lng: selectedPlace.longitude,
            }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.vicinity}</p>
              <p>Rating: {selectedPlace.rating}</p>
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export default PlacesMap;
