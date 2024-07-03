import React, { useState, useCallback } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow
} from "@vis.gl/react-google-maps";
import { useSelector,useDispatch } from "react-redux";
import { setCenter } from '../features/center/centerSlice';

const PlacesMap = () => {
  const { places } = useSelector((state) => state.places);
  const { center } = useSelector((state) => state.center);
  const dispatch = useDispatch();

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiKey2 = process.env.API_KEY;
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMarkerClick = useCallback((place) => {
    setSelectedPlace(place);
  }, []);

  const handleDragEnd = useCallback((map) => {
    const newCenter = map.getCenter();
    dispatch(setCenter({ lat: newCenter.lat(), lng: newCenter.lng() }));
  }, [dispatch]);

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
        onDragEnd={(map) => handleDragEnd(map)}
        drag = {true}
      >
        {places && places.data && places.data.places && places.data.places.map((place) => (
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
            <div className="relative">
            <button
                className="absolute top-0 right-0 p-1 bg-white rounded-full shadow-md focus:outline-none"
                onClick={() => setSelectedPlace(null)}
              >
                &times;
              </button>
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.vicinity}</p>
              <p> {selectedPlace.rating ? `Rating: ${selectedPlace.rating}` : '' } </p>
              {/* {selectedPlace.photo && (
                <img
                  src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${selectedPlace.photo}&sensor=false&maxheight=400&maxwidth=400
                  &key=${apiKey2}`}
                  alt={`${selectedPlace.name}`}
                  className="w-60 h-60 my-2"
                />
              )} */}
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export default PlacesMap;
