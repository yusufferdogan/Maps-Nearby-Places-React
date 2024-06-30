import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlaces = createAsyncThunk(
  'places/fetchPlaces',
  async ({ latitude, longitude, radius }) => {
    console.log("lat",latitude, "long", longitude, "radius", radius);
    const response = await axios.get(
      'api/places/search',
      { params: { latitude, longitude, radius } }
    );
    return response.data;
  }
);

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    places: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.places = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPlaces.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default placesSlice.reducer;
