import { createSlice } from "@reduxjs/toolkit";
import { marker } from "leaflet";

const initialState = {};

export const markersSlice = createSlice({
  name: "markers",
  initialState,
  reducers: {
    addInitMarkers: (state, action) => {
      console.log({ state, marker: action.payload.markers });
      if (action.payload.markers) state.markers = action.payload.markers;
    },
  },
});

export const { addInitMarkers } = markersSlice.actions;
export const getMarkers = (state) => state;

export default markersSlice.reducer;
