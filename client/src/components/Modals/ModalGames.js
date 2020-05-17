import React from 'react';
import './science.css';

const scienceIdeas = [
  {
    id: '1',
    text: `8 Drinking Games You Can Play With Friends Virtually`,
    link:
      'https://www.thrillist.com/drink/nation/online-drinking-games-virtual-happy-hour-activities',
    picture: require('../../pictures/drink.png'),
  },
];
export default function ModalGames() {
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
