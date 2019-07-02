import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function Apples(){
  var mainStyles = {
    display: 'contents'
  }

  return (
    <div style={mainStyles}>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default Apples;