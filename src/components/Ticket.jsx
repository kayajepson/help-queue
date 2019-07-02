import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  var ticketStyle = {
    display: 'flex',
    margin: '.5rem'
  }
  var locationStyle = {
    alignItems: 'flex-start',
    padding: '1rem'
  }
  var namesStyle = {
    alignItems: 'flex-start',
    padding: '1rem'
  }
  var issueStyle = {
    marginLeft: 'auto',
    padding: '1rem'
  }
  return (
    <div style={ticketStyle}>
      <style jsx>{`
        div {
          background-color: red;
        }
      `}</style>
      <h3 style={locationStyle}>{props.location}</h3>
      <h3 style={namesStyle}>{props.names}</h3>
      <p style={issueStyle}><em>{props.issue}</em></p>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;