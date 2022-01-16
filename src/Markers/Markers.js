import React from "react";
import { GenerateMarkersArray } from "./helpers";
import { useSelector } from "react-redux";
import { getMarkers } from "../state/markersSlice";

export default function Markers() {
  const { markers } = useSelector(getMarkers);
  console.log("test 8 marker", markers);
  const markersArray = GenerateMarkersArray(markers);
  return <>{markersArray}</>;
}
