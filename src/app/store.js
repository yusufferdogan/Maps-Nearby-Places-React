import { configureStore } from '@reduxjs/toolkit';
import placesReducer from '../features/places/placesSlice';
import centerReducer from '../features/center/centerSlice';

export const store = configureStore({
  reducer: {
    places: placesReducer,
    center: centerReducer,
  },
});
