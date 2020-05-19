import React from 'react';
import './science.css';

const scienceIdeas = [
  {
    id: '1',
    text: `Make your own Zines! `,
    link:
      'https://www.thrillist.com/entertainment/nation/how-to-make-a-zine-quarantine',
    picture:
      'https://images.unsplash.com/photo-1525278070609-779c7adb7b71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1460&q=80',
  },
  {
    id: '2',
    text: `Try a colloring app `,
    link:
      'https://apps.apple.com/us/app/colorfy-coloring-art-game/id1009442510',
    picture:
      'https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_1280.jpg',
  },
  {
    id: '3',
    text: `Practice hand-lettering `,
    link: 'https://awesomealice.com/hand-lettering-practice-sheets/',
    picture:
      'https://cdn.pixabay.com/photo/2016/02/19/10/12/writing-1209121_1280.jpg',
  },
  {
    id: '4',
    text: `Press flowers `,
    link: 'https://www.proflowers.com/blog/how-to-press-flowers',
    picture:
      'https://cdn.pixabay.com/photo/2018/03/31/14/11/flower-3278210_1280.jpg',
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
                width: '40%',
              }}
            />

            <div className="science-text">{each.text}</div>
          </a>
        ))}
      </div>
    </>
  );
}
