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
  {
    id: '2',
    text: `Host a Virtual Game Night With These Multiplayer Apps`,
    link:
      'https://www.oprahmag.com/entertainment/g32057373/best-online-games/?slide=4',
    picture:
      'https://cdn.pixabay.com/photo/2016/07/07/16/46/roll-the-dice-1502706_1280.jpg',
  },
  {
    id: '3',
    text: `Play a board game`,
    link: ' https://www.t3.com/features/best-board-games',
    picture:
      'https://images.unsplash.com/photo-1556112353-ad4fb98d81e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1244&q=80',
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
