import React from 'react';

function Header(){
  var headerStyle = {
    textAlign: "center",
    color: "white",
    backgroundColor: "orange",
    display: 'block',
    height: '100%',
    // position: 'fixed',
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
    </div>
  );
}

export default Header;
