import React from 'react';
import './science.css';

const scienceIdeas = [
  {
    id: '1',
    text: `Stream Boiler room!`,
    link: 'https://www.youtube.com/watch?v=YIFwo6lKDhI',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Boiler_Room_Music_Project_Logo.jpeg/440px-Boiler_Room_Music_Project_Logo.jpeg',
  },
  {
    id: '2',
    text: `Berlin's Legendary Club Scene Goes Digital to Keep the Beat Alive`,
    link:
      'https://www.thrillist.com/travel/nation/berlin-techno-club-scene-digital-live-streaming-coronavirus',
    picture:
      'https://images.unsplash.com/photo-1546589643-b2e969dca58b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    id: '3',
    text: `Stream music festivals and concerts!`,
    link:
      'https://www.billboard.com/articles/columns/pop/9335531/coronavirus-quarantine-music-events-online-streams',
    picture:
      'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg',
  },
  {
    id: '4',
    text: `Take a music lesson !`,
    link: 'https://www.skillshare.com/browse/music',
    picture:
      'https://media-exp1.licdn.com/dms/image/C4D0BAQHOxdDlJUGZIQ/company-logo_200_200/0?e=2159024400&v=beta&t=P9Z8SHvB_nNnUQElzgt4-JRQ_Bnj27kllZHpMS4SL1Y',
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
