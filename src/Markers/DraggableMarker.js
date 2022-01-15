import { Marker, Popup } from "react-leaflet";
import React, { useRef, useState, useCallback, useMemo } from "react";
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
}) {
  // x = 0.527375201288245 * 1016,
  // y = 0.519297519875233 * 1590
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
  const [position, setPosition] = useState(centerCor);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      icon={icon}
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={L.latLng([position.y, position.x])}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}
