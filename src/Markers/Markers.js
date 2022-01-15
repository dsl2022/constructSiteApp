import React from "react";
import { GenerateMarkersArray } from "./helpers";
import { useSelector } from "react-redux";
import { getMarkers } from "../state/markersSlice";
export default function Markers() {
  const { markers } = useSelector(getMarkers);
  //   console.log("test markers in Markers", markers);
  const markersArray = GenerateMarkersArray(markers.markers);
  return <>{markersArray}</>;
}
