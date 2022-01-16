import React, { useRef, useEffect } from "react";
import { Map } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import sampleData from "./sample_data.json";
import { generateMarkersHandler } from "./utils/markerUtils";
import {
  addInitMarkers,
  getMarkers,
  updateMarkers,
} from "./state/markersSlice";
import Markers from "./Markers/Markers";
import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./styles.css";

export default () => {
  const mapRef = useRef(null);
  const markers = useSelector(getMarkers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (markers.markers.length === 0)
      dispatch(addInitMarkers(sampleData.markers));
  });

  const addMarker = (e) => {
    // use e.latlng to generate new marker data
    // concat new data to existing markers.
    // dispatch to redux
    const newData = generateMarkersHandler(e.latlng);
    const updatedData = markers.markers.concat(newData);
    dispatch(updateMarkers(updatedData));
  };

  useEffect(() => {
    const map = mapRef.current.leafletElement;
    const bounds = [
      [0, 0],
      [1016, 1590],
    ];
    const image = L.imageOverlay(
      "https://structionsite-code-challenge-assets.s3.us-east-2.amazonaws.com/full_map.png",
      bounds
    ).addTo(map);

    map.fitBounds(image.getBounds());
  });

  return (
    <>
      <nav>nav bar</nav>

      <Map
        onClick={addMarker}
        ref={mapRef}
        minZoom={0}
        crs={CRS.Simple}
        maxBoundsViscosity={1.0}
        boundsOptions={{ padding: [50, 50] }}
        style={{ height: "100vh" }}
      >
        <Markers />
      </Map>
    </>
  );
};
