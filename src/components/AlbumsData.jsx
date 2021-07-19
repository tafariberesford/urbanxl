import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/albumsxl `

const headers = {Authorization: `Bearer ${AIRTABLE_KEY}` }

export default function AlbumsData() {
  const {id} = useParams();
  const [ album, setAlbum ] = useState({});

  useEffect(() => {
    const fetchAlbum = async () => {
      const URL = `${AIRTABLE_URL}/${id}`;
      const response = await axios.get(URL, { headers, })
      setAlbum(response.data);
    };
    fetchAlbum();
  }, [id]);
  return (
    <div>
      <p><h1>{album.fields?.album}</h1></p>
      <img src={album.fields?.imgURL} />
      <p>{album.fields?.releaseDate}</p>
      <p>{album.fields?.review}</p>{"\n"}
    </div>
  )
}