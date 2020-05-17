import React from 'react';
import './science.css';

const scienceIdeas = [
  {
    id: '1',
    text: `Berlin's Legendary Club Scene Goes Digital to Keep the Beat Alive`,
    link:
      'https://www.thrillist.com/travel/nation/berlin-techno-club-scene-digital-live-streaming-coronavirus',
    picture: require('../../pictures/music.png'),
  },
];
export default function ModalMusic() {
  return (
    <>
      <div className="science-container">
        {scienceIdeas.map((each) => (
          <a className="science-idea" href={`${each.link}`}>
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
