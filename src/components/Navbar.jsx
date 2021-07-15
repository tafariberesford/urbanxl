import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/"><h1>Urban XL</h1></Link>
      <Link to="/Albums">Top 10 Albums</Link>
    </div>
  );
}