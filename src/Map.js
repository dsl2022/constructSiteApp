import React, { useRef, useEffect } from "react";
import { Map } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import sampleData from "./sample_data.json";
import { addInitMarkers, getMarkers } from "./state/markersSlice";
import Markers from "./Markers/Markers";

import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./styles.css";
import DraggableMarker from "./Markers/DraggableMarker";

export default () => {
  const mapRef = useRef(null);
  const markers = useSelector(getMarkers);
  const dispatch = useDispatch();
  console.log({ markers });

  // var pin = {
  //   x: 0.527375201288245,
  //   y: 0.519297519875233,
  //   created_at: "2018-06-20 06:04:11 UTC",
  //   updated_at: "2018-07-24 20:12:47 UTC",
  //   img_preview:
  //     "https://structionsite-code-challenge-assets.s3.us-east-2.amazonaws.com/preview.jpeg",
  // };
  useEffect(() => {
    dispatch(addInitMarkers(sampleData));
  });
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
        ref={mapRef}
        minZoom={0}
        crs={CRS.Simple}
        maxBoundsViscosity={1.0}
        boundsOptions={{ padding: [50, 50] }}
        style={{ height: "100vh" }}
      >
        {/* <Marker
          data-key={"test remove"}
          draggable={true}
          icon={icon}
          position={[pin.y * 1590, pin.x * 1016]}
        >
          <Popup>
            <img src={pin.img_preview} />
          </Popup>
        </Marker> */}
        <DraggableMarker />
        <Markers />
      </Map>
    </>
  );
};
