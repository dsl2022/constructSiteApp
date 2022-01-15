import React from "react";
import DraggableMarker from "./DraggableMarker";

export function GenerateMarkersArray(markerData) {
  console.log({ markerData });

  return markerData.map((marker) => {
    const { x, y, rotation } = marker;
    return (
      <DraggableMarker
        height="20"
        width="20"
        x={x * 1016}
        y={y * 1590}
        rotatedValue={rotation}
      />
    );
  });
}
