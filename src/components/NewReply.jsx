import { useState } from "react";

import React from 'react';
import axios from "axios";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY

const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }
const repliesURL = `https://api.airtable.com/v0/appBlbkoSrRUxh4cI/replies/`


export default function NewReply(props) {
  const [replyData, setReplyData] = useState({
    name: "",
    reply: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevReply) => ({
      ...prevReply,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name: replyData.name,
      reply: replyData.reply,
      albumsxl: [props.articleID]
    }
    const posts = await axios.post(repliesURL, { fields }, { headers })
    console.log(posts)
    props.setToggle((prev) => {
      return !prev
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={replyData.name} onChange={handleChange} placeholder="Your name"></input>
        <input type="text" name="reply" value={replyData.reply} onChange={handleChange} placeholder="Leave a reply"></input>
        <button>Post reply</button>
      </form>
    </div>
  )
}
