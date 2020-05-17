import React from 'react';
import './notfound.css';

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>sorry, you got lost, go back to main page</p>
      <div
        className="found"
        style={{ marginTop: '100px', height: '500px', width: '500px' }}
      ></div>
    </div>
  );
}
export default NotFound;
