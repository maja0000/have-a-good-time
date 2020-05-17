import React from 'react';
import './science.css';

const scienceIdeas = [
  {
    id: '1',
    text: `NASA launches, landings, and events. Watch live broadcasts from NASA
  Television and NASA's social media channels, and a schedule of
  upcoming live events.`,
    link: 'https://www.nasa.gov/nasalive',
    picture: require('../../pictures/nasa.png'),
  },
  {
    id: '1',
    text: `Simple science experiments you can do at home`,
    link:
      'https://www.businessinsider.com/8-awesomely-simple-science-experiments-you-can-do-at-home-2016-7?r=DE&IR=T',
    picture: require('../../pictures/experiment.png'),
  },
];
function ModalScience() {
  return (
    <>
      <div className="science-container">
        {scienceIdeas.map((each) => (
          <a target="_blank" className="science-idea" href={`${each.link}`}>
            <div
              style={{
                backgroundImage: `url("${each.picture}")`,
                backgroundSize: 'cover',
                height: '100px',
                width: '20%',
              }}
            />

            <div className="science-text">{each.text}</div>
          </a>
        ))}
      </div>
    </>
  );
}
export default ModalScience;
