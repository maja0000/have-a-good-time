import React from 'react';
import './science.css';

const scienceIdeas = [
  {
    id: '1',
    text: `Zoom dinner party? Virtual sleepover? `,
    link: 'https://zoom.us/',
    picture: 'https://www.vistafon.de/wp-content/uploads/2019/06/zoom-logo.jpg',
  },
  {
    id: '2',
    text: `Some comedy clubs are organising online stand up shows`,
    link: 'https://www.youtube.com/watch?v=gT-4_c9LYCU',
    picture:
      'https://images.unsplash.com/photo-1581222963431-00ab5d117de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
  },
  {
    id: '4',
    text: `Write a letter! no, not email!`,
    link: '',
    picture:
      'https://images.unsplash.com/photo-1532255864546-c093fd3786bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
  },
  {
    id: '5',
    text: `Start a podcast with your hilarious friends`,
    link:
      'https://www.buzzsprout.com/how-to-make-a-podcast?gclid=CjwKCAjwh472BRAGEiwAvHVfGlr2HXP1x-NNjJKjJX6HRxXOrhHzy2VFbezCf3Wl24KBrqUzSnvHKhoC2PsQAvD_BwE',
    picture:
      'https://images.unsplash.com/photo-1567596275753-92607c3ce1ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
];
function ModalSocial() {
  return (
    <>
      <div className="science-container">
        {scienceIdeas.map((each) => (
          <a target="_blank" className="science-idea" href={`${each.link}`}>
            <div
              className="modal-picture"
              style={{
                backgroundImage: `url("${each.picture}")`,
                backgroundSize: 'cover',
                height: '100px',
              }}
            />

            <div className="science-text">{each.text}</div>
          </a>
        ))}
      </div>
    </>
  );
}
export default ModalSocial;
