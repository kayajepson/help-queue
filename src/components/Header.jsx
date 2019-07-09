import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var headerStyle = {
    textAlign: "center",
    color: "white",
    backgroundColor: "orange",
    display: 'block',
    height: '100%',
    margin: '0'
  }

  return (
    <div>
      <style jsx global>
      {`
      body, div#react-app-root {
        display: contents;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
      `}
      </style>
      <h1 style={headerStyle}>Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;