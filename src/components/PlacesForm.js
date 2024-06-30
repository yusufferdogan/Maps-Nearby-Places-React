import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlaces } from '../features/places/placesSlice';
import { setCenter } from '../features/center/centerSlice';

const PlacesForm = () => {
  const [latitude, setLatitude] = useState(40.9781815);
  const [longitude, setLongitude] = useState(29.075794);
  const [radius, setRadius] = useState(1000);
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPlaces({ latitude, longitude, radius }));
    dispatch(setCenter({ lat: parseFloat(latitude), lng: parseFloat(longitude) }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <input
        type="text"
        placeholder="Radius"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PlacesForm;
