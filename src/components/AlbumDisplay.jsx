import React from "react";

import { Link } from "react-router-dom";

export default function AlbumDisplay({album}) {
  const { id, fields } = album;
  return (
  <Link to={`/albums/${id}`}>
    <div>
      {fields.album}
      <img src={fields.imgURL} />
      </div>
  </Link>
  );
}