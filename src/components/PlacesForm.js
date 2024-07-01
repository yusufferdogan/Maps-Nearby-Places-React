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
    dispatch(fetchPlaces({ latitude, longitude, radius }))   
    .then(response => console.log("Places fetched:", response))
    .catch(err => console.error("Error fetching places:", err));;
    dispatch(setCenter({ lat: parseFloat(latitude), lng: parseFloat(longitude) }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-center mb-4 justify-center">
      <div className="max-w-sm mr-4">
        <label htmlFor="latitude" className="block text-sm font-medium mb-2">Latitude</label>
        <input
          type="text"
          id="latitude"
          className="border border-black py-3 px-4 block w-full rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>

      <div className="max-w-sm mr-4">
        <label htmlFor="longitude" className="block text-sm font-medium mb-2">Longitude</label>
        <input
          type="text"
          id="longitude"
          className="py-3 px-4 block w-full  rounded-lg text-sm border border-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>

      <div className="max-w-sm mr-4">
        <label htmlFor="radius" className="block text-sm font-medium mb-2">Radius</label>
        <input
          type="text"
          id="radius"
          className="py-3 px-4 block w-full rounded-lg text-sm border border-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Radius"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
      </div>

      <div className="max-w-sm mr-4 mt-8">
        <button
          type="submit"
          className="mb-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default PlacesForm;
