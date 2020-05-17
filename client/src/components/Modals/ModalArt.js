import React from 'react';
import './science.css';

const scienceIdeas = [
  {
    id: '1',
    text: `Make your own Zines! `,
    link:
      'https://www.thrillist.com/entertainment/nation/how-to-make-a-zine-quarantine',
    picture: require('../../pictures/zines.png'),
  },
];
export default function ModalArt() {
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
