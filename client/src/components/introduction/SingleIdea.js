import React from 'react';
import './singleidea.css';

function SingleIdea({ ideas, img }) {
  console.log(ideas.img);
  const style = {
    ideaPic: {
      backgroundImage: `url("${ideas.img}")`,
      // backgroundSize: '200px',
      height: '200px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'noRepeat',
      float: 'left',
      display: 'inline',
      width: '49%',
      marginTop: '20px',
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
          <div style={style.ideaPic}></div>
        </div>
      </div>
    </>
  );
}
export default SingleIdea;
