import React, { useState } from 'react';
import './introduction.css';
// component
import DefaultIdeas from './DefaultIdeas';

function Introduction() {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          no idea what to do <br />
          durning the lockdown?
        </div>
        <div className="couple-of-ideas">we have some ideas</div>
        <DefaultIdeas />
      </div>
      <div className="all-ideas"></div>
    </>
  );
}
export default Introduction;
