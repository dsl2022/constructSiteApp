import React, { useRef, useEffect } from "react";
import { Map } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import sampleData from "./sample_data.json";
import shortUuid from "short-uuid";
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
  const updateMarkersHandler = ({ lat, lng }) => {
    return {
      id: shortUuid.generate(),
      x: lat / 1016,
      y: lng / 1590,
      image_id: "InWallMEP.PNG1495000835566",
      image_full:
        "https://front-end-programming-challenge.s3.amazonaws.com/photos/1dfdeab8-d849-4b04-a84d-bce508a9709c.jpg",
      image_preview:
        "https://d3dgy5wiit1ici.cloudfront.net/pin_images/images/preview/1dfdeab8-d849-4b04-a84d-bce508a9709c.jpg?1495000836",
      taken_time: "2017-04-04 11:02:16 UTC",
      created_at: "2017-05-17 06:00:35 UTC",
      updated_at: "2017-10-31 21:03:39 UTC",
      description: null,
      image_type: "flat",
      rotation: 0,
      uuid: "849d10fc-a278-4d38-9602-2bf0a091a873",
      image_file_name: "1dfdeab8-d849-4b04-a84d-bce508a9709c.jpg",
      image_content_type: "image/png",
      image_file_size: 1841240,
      image_updated_at: "2017-05-17 06:00:36 UTC",
    };
  };
  const addMarker = (e) => {
    // use e.latlng to generate new marker data
    // concat new data to existing markers.
    // dispatch to redux
    const newData = updateMarkersHandler(e.latlng);
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
