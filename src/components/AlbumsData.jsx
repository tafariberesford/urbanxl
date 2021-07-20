import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NewReply from "./NewReply"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/albumsxl `

const headers = {Authorization: `Bearer ${AIRTABLE_KEY}` }

export default function AlbumsData() {
  const {id} = useParams();
  const [album, setAlbum] = useState({});
  const [replies, setReplies] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchReplies = async (repliesArray) => {
      let repliesURL = `https://api.airtable.com/v0/appBlbkoSrRUxh4cI/replies/`
      repliesArray.forEach(async(reply) => {
        const response = await axios.get(`${repliesURL}${reply}`, { headers })
        setReplies((prev) => ([... prev, response.data]))
      })
    }

    const fetchAlbum = async () => {
      setReplies([]);
      const URL = `${AIRTABLE_URL}/${id}`;
      const response = await axios.get(URL, { headers, })
      setAlbum(response.data);
      if (response.data.fields?.replies) {
        fetchReplies(response.data.fields?.replies)
      }
    };
    fetchAlbum();
  }, [id, toggle]);
  return (
    <div className="albums">
      <p><h1>{album.fields?.album}</h1></p>
      <img src={album.fields?.imgURL} />
      <p>{album.fields?.releaseDate}</p>
      <p>{album.fields?.review}</p>{"\n"}
      <NewReply articleID={id} setToggle={ setToggle }/>
      <div className="replies">
        {replies.map((reply) => {
          return <h1 className="replies">{reply.fields?.reply}</h1>
        })}
      </div>
    </div>
  )
}