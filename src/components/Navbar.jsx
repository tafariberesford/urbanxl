import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"><h1 className="urban">Urban XL</h1></Link>
      <Link to="/urban-albums"><h2 className="urban">Top 10 Albums</h2></Link>
    </div>
  );
}