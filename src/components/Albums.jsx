import axios from "axios";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

const AIRTABLE_KEY = process.env.API_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.API_AIRTABLE_BASE

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/urbanxl `

const headers = {Authorization: `Bearer ${AIRTABLE_KEY}` }

export default function Albums() {
  const [albums, setAlbums] = useState([])
  
  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await axios.get(URL, {
        headers,
      });
      console.log(response)
    };
    fetchAlbums();
  }, []);

if (albums.length === 0) {
  return <BeatLoader />
}

  return <div>Albums</div>;
}