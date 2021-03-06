import { Marker, Popup } from "react-leaflet";
import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { useSelector } from "react-redux";
import { getMarkers } from "../state/markersSlice";

import {
  deleteMarkerById,
  updateMarkerRotationById,
} from "../utils/markerUtils";
import L from "leaflet";
// const center = {
//   lat: 51.505,
//   lng: -0.09,
// };

export default function DraggableMarker({
  rotatedValue,
  height,
  width,
  x = 0,
  y = 0,
  id,
}) {
  // x = 0.527375201288245 * 1016,
  // y = 0.519297519875233 * 1590
  const { markers } = useSelector(getMarkers);
  const centerCor = {
    x,
    y,
  };

  const icon = L.divIcon({
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    className: "yourClassName",
    html: `<img 
    style="transform: rotate(${rotatedValue}deg);"
    height="${height}" 
    width="${width}" 
    src='https://app.structionsite.com/assets/marker_flat.png'>`,
  });
  const [draggable, setDraggable] = useState(false);
  const [markerDragged, setMarkerDragged] = useState(false);
  const [position, setPosition] = useState(centerCor);
  const markerRef = useRef(null);
  useEffect(() => {
    updateMarkerRotationById({
      id,
      data: markers,
      position: position,
    });

    console.log("test position useEffect", { markerDragged, position });
  }, [markerDragged, markerRef]);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          console.log(marker, "test marker 61");
          setPosition(marker.getLatLng());
          setMarkerDragged(true);
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);
  const testUpdate = useCallback(() => {
    console.log("test update", id, position);
  }, []);
  return (
    <Marker
      icon={icon}
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={L.latLng([position.x, position.y])}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
        <button onClick={testUpdate}>update</button>
        <button>rotate</button>
        <button>view photo</button>
      </Popup>
    </Marker>
  );
}
