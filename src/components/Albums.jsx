import axios from "axios";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

import AlbumDisplay from "./AlbumDisplay"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/albumsxl `

const headers = {Authorization: `Bearer ${AIRTABLE_KEY}` }

export default function Albums() {
  const [albums, setAlbums] = useState([])
  
  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await axios.get(URL, {
        headers,
      });
      setAlbums(response.data.records);
    };
    fetchAlbums();
  }, []);

if (albums.length === 0) {
  return <BeatLoader />
}
  


  return (
    <div>
      {albums.map((album) => { 
        return <AlbumDisplay album={album} key={album.id }/>
    })}
    </div>
  )
}
