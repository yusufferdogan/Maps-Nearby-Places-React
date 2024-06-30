import { createSlice } from '@reduxjs/toolkit';

const centerSlice = createSlice({
  name: 'center',
  initialState: {
    center: { lat: 37.7749, lng: -122.4194 },
  },
  reducers: {
    setCenter: (state, action) => {
      state.center = action.payload;
    },
  },
});

export const { setCenter } = centerSlice.actions;
export default centerSlice.reducer;
