import React from "react";

export default function AlbumDisplay(props) {
  return (
    <div>
      {props.album.fields.album}
      <img src={props.album.fields.imgURL} />
    </div>
  );
}