import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const markersSlice = createSlice({
  name: "markers",
  initialState,
  reducers: {
    addInitMarkers: (state, action) => {
      if (action.payload.markers) state.markers = action.payload.markers;
    },
  },
});

export const { addInitMarkers } = markersSlice.actions;
export const getMarkers = (state) => state;

export default markersSlice.reducer;
