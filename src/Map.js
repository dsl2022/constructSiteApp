import "./styles.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import sampleData from "./sample_data.json";
import { addInitMarkers, getMarkers } from "./state/markersSlice";
import { marker } from "leaflet";
function Map() {
  const markers = useSelector(getMarkers);
  console.log(markers);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addInitMarkers(sampleData))}>
        populate
      </button>
    </div>
  );
}

export default Map;
