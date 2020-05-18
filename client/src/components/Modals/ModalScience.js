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
    id: '2',
    text: `Simple science experiments you can do at home`,
    link:
      'https://www.businessinsider.com/8-awesomely-simple-science-experiments-you-can-do-at-home-2016-7?r=DE&IR=T',
    picture:
      'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    id: '3',
    text: `Experiment with AI `,
    link: 'https://experiments.withgoogle.com/',
    picture:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    id: '4',
    text: `Look at the stars up close`,
    link: 'https://stellarium-web.org/',
    picture:
      'https://images.unsplash.com/photo-1589811765083-27b148dbf397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80',
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
