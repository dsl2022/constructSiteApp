import shortUuid from "short-uuid";

export const generateMarkersHandler = ({ lat, lng }) => {
  console.log("test position generate", { lat, lng });
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

export const updateMarkerRotationById = ({ data, position, id }) => {
  console.log("update rotation", { position, id, data });
};
