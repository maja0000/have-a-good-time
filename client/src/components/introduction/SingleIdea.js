import React from 'react';
import './singleidea.css';

function SingleIdea({ ideas, img }) {
  const style = {
    ideaPic: {
      backgroundImage: `url("${ideas.img}")`,
    },
  };
  return (
    <>
      <div className="idea-container">
        <div className="idea-wrapper">
          <div className="idea-info">
            <div className="idea-title">{ideas.title}</div>
            <div className="idea-description">{ideas.description}</div>
          </div>
          <div className="idea-pic" style={style.ideaPic}></div>
        </div>
      </div>
    </>
  );
}
export default SingleIdea;
